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
    const sql = `INSERT INTO categories(name, description, created_at) VALUES ("${req.body.name}","${req.body.description}","${req.body.created_at}")`;

    connection.query(sql, (err, results) => {
        if (err || !req.body.name) {
            res.status(404).send('create error');
        } else {
            res.status(201).json({
                status: 'success create',
                data: {
                    results,
                },
            });
            console.log('Query results: ', results);
        }
    });
};

exports.getCategory = (req, res) => {
    const sql = `SELECT id, name, description, created_at, update_at FROM categories WHERE id=${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err && !req.params.id) {
            res.status(404).send('There is no category')
        } else {
            res.status(200).json({
                status: 'success get',
                data: {
                    result,
                },
            });
            console.log('Query results: ', result);
        }

        // MySQL bağlantısını kapat
        //connection.end();
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
