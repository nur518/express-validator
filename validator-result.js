const { validationResult } = require('express-validator');
const AppError = require('../utils/appError');

module.exports = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors);
        const result = errors.formatWith(({msg, param}) => {
            return  {[param]: msg,}
        })

        return res.json({validationErrors:result.array()})
    }else {
        next();
    }
}
