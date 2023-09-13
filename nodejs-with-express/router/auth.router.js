const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.post('/auth/signIn', controller.authController.signIn)

module.exports = {
    auth: router
}
