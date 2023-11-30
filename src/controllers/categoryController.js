exports.getAllCategories = (req, res) => {
    res.status(200).json({
        status: 'success get all',
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
