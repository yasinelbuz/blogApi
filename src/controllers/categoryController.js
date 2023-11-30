const { connection } = require('../dbConnection');

exports.getAllCategories = (req, res) => {
    const sql = 'SELECT * FROM categories';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('MySQL query error: ', err);
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    results,
                },
            });
            console.log('Query results: ', results);
        }

        // MySQL bağlantısını kapat
        //connection.end();
    });
};

exports.createCategory = (req, res) => {
    res.status(201).json({
        status: 'success create',
    });
};

exports.getCategory = (req, res) => {
    res.status(200).json({
        status: 'success get',
    });
};
exports.updateCategory = (req, res) => {
    res.status(200).json({
        status: 'success update',
    });
};
exports.deleteCategory = (req, res) => {
    res.status(204).json({
        status: 'success delete',
    });
};
