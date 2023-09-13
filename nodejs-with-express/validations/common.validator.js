const {param} = require('express-validator')
const CommonValidator = {
    validateCountryById() {
        return [param('countryId').isLength({min: 1, max: 4}).withMessage('Geçersiz Id Biçemi')]
    },
}

module.exports = CommonValidator
