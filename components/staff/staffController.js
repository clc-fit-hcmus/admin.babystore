const { queryRange, countAll } = require('./staffService');

const getStaffs = async (req, res) => {
    try {
        await countAll('NHANVIEN').then((count) => {
            const perPage = 300;
            const maxPage = Math.ceil(count[0]['count'] / perPage);
            const page = ((t = (req.query.page || 1)) <= maxPage) && (t > 0) ? t : 1;

            const from = (perPage * page) - perPage + 1;
            const to = perPage * page;

            console.log(`${from}/${to}`);

            queryRange('XEM_NHAN_VIEN', from, to > count[0]['count'] ? count[0]['count'] : to).then((staffs) => {
                res.render('staffs/staff-list', { 
                    staffs,
                    current: page,
                    is_overload: page >= maxPage,
                    is_notOne: maxPage > 1,
                    pages: maxPage,
                    next: parseInt(page) + 1,
                    prev: (c = parseInt(page) - 1) ? c : 0
                 })
            });
        });
    } catch (error) {
        res.status(409).json({success: false, data: [], error: error});
    }
}

module.exports = {
    getStaffs
}