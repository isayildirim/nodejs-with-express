const personController = require('./person.controller')
const commonController = require('./common.controller')
const titlesController = require('./titles.controller')
const companyController = require('./company.controller')
const authController = require('./auth.controller')

module.exports = {
    personController,
    commonController,
    companyController,
    titlesController,
    authController
}
