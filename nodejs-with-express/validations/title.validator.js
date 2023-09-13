const {body, param, query} = require('express-validator')

const TitleValidator = {
    validateCreateTitle() {
        return [body('name').not().isEmpty()]
    },
    validateUpdateTitle() {
        return [body('name').not().isEmpty()]
    },
    validateFindById() {
        return [param('id').isMongoId()]
    },
    validateGetPersonsById() {
        return [param('id').isMongoId()]
    },
    validateDeleteTitle() {
        return [query('id').isMongoId()]
    }
}

module.exports = TitleValidator
