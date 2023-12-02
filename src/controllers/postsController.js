const { connection } = require('../dbConnection');

exports.getAllPosts = (req, res) => {
    const sql = 'SELECT * FROM posts';
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

exports.createPost = (req, res) => {
    const sql = `INSERT INTO posts(category_id, title, text, author, description, coverage_image) VALUES ("${req.body.category_id}","${req.body.title}","${req.body.text}","${req.body.author}","${req.body.description}","${req.body.coverage_image}")`;

    connection.query(sql, (err, results) => {
        if (err || !req.body.title || !req.body.text) {
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

exports.getPost = (req, res) => {
    const sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
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


exports.updatePost = (req, res) => {
    const d = new Date();
    const formattedDate = d.toISOString().split('T')[0];
    const sql = `UPDATE posts SET category_id="${req.body.category_id}", title="${req.body.title}",  text="${req.body.text}", author="${req.body.author}", updated_at="${formattedDate}", description="${req.body.description}", coverage_image="${req.body.coverage_image}" WHERE id=${req.params.id}`;

    connection.query(sql, (err, result) => {
        if (err || !result.affectedRows > 0) {
            res.status(404).send('update error');
        } else {
            res.status(200).json({
                status: 'success updated',
                data: {
                    result,
                },
            });
            console.log('Query results: ', result);
        }
    });
};

exports.deletePost = (req, res) => {
    const sql = `DELETE FROM posts WHERE id=${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err || !result.affectedRows > 0) {
            res.status(404).send('delete error');
        } else {
            res.status(204).send();
            console.log('Query results:');
        }
    });
};
