const utils = require("../utils");
const {StatusCodes} = require("http-status-codes");
const baseResponse = require("../dto/baseresponse.dto");
const services = require("../services/index");

exports.signIn = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await services.auth.signIn(req)
        res.status(StatusCodes.OK).json({
            ...baseResponse,
            data: json,
            success: true,
            timestamp: Date.now(),
            code: StatusCodes.OK
        })
    } catch (error) {
        utils.helpers.logToError(error, req)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...baseResponse,
            success: false,
            error: true,
            timestamp: Date.now(),
            message: error.message,
            code: StatusCodes.INTERNAL_SERVER_ERROR,
        })
    }
}
