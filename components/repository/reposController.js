const { queryRange, countAll } = require('./reposService');

const getProducts = async (req, res) => {
    try {
        await countAll('SANPHAM').then((count) => {
            const perPage = 300;
            const maxPage = Math.ceil(count[0]['count'] / perPage);
            const page = ((t = (req.query.page || 1)) <= maxPage) && (t > 0) ? t : 1;

            const from = (perPage * page) - perPage + 1;
            const to = perPage * page;

            queryRange('XEM_HANG_TON_KHO', from, to > count[0]['count'] ? count[0]['count'] : to).then((products) => {
                res.render('repository/inventory', { 
                    products,
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

const getHistoryImporting = async (req, res) => {
    try {
        await countAll('LICHSUNHAP').then((count) => {
            const perPage = 300;
            const maxPage = Math.ceil(count[0]['count'] / perPage);
            const page = ((t = (req.query.page || 1)) <= maxPage) && (t > 0) ? t : 1;

            const from = (perPage * page) - perPage + 1;
            const to = perPage * page;

            queryRange('XEM_LICH_SU_NHAP_KHO', from, to > count[0]['count'] ? count[0]['count'] : to).then((products) => {
                res.render('repository/importing', { 
                    products,
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
    getProducts,
    getHistoryImporting
}