const Item = require('./item');

const searchByName(req, res, next) => {
    const urlParameter = req.params.name;
    Item.find({'name' : urlParameter}, (err, item) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(item);
        }
    });
};