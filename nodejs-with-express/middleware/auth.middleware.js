const helpers = require('../utils/index')
const {StatusCodes} = require('http-status-codes')
const consts = require('../consts/index')

module.exports = (req, res, next) => {
    try {
        if (!req.url.includes('/api/v1/auth/signIn')) {
            const token = req.headers.authorization.split(" ")[1]
            const decodedToken = helpers.helpers.verifyToken(token)
            if (decodedToken.decodedToken === null) {
                return res.status(StatusCodes.UNAUTHORIZED).send({
                    message: consts.auth.UNAUHTORIZATION_MESSAGE
                })
            }
            req.user = decodedToken
            next()
            return
        }
        next()
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
            message: consts.auth.UNAUHTORIZATION_MESSAGE
        })
    }
}
