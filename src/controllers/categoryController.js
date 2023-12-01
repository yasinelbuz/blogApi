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
            res.status(404).send('There is no category');
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
    const d = new Date();
    const formattedDate = d.toISOString().split('T')[0];
    const sql = `UPDATE categories SET name="${req.body.name}",description="${req.body.description}",update_at="${formattedDate}" WHERE id=${req.params.id}`;

    connection.query(sql, (err, result) => {
        if (err || !result.affectedRows > 0) {
            res.status(404).send('update error');
        } else {
            res.status(200).json({
                status: 'success updata',
                data: {
                    result,
                },
            });
            console.log('Query results: ', result);
        }
    });
};
exports.deleteCategory = (req, res) => {
    const sql = `DELETE FROM categories WHERE id=${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err || !result.affectedRows > 0) {
            res.status(404).send('delete error');
        } else {
            res.status(204).send();
            console.log('Query results:');
        }
    });
};
