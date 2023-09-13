const baseResponse = require('../dto/baseresponse.dto')
const commonService = require('../services/index')
const {StatusCodes} = require('http-status-codes')
const utils = require('../utils/index')

exports.getAllCountry = (req, res) => {
    try {
        const _response = {...baseResponse}
        const json = commonService.common.getAllCountries(req, res)
        res.json({..._response, data: json, success: true, timestamp: Date.now(), code: StatusCodes.OK})
    } catch (error) {
        utils.helpers.logToError(error, req)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            ..._response,
            success: false,
            error: true,
            timestamp: Date.now(),
            message: error.message,
            code: StatusCodes.INTERNAL_SERVER_ERROR,
        })
    }
}

exports.getCityByCountryId = (req, res) => {
    try {
        const {countryId} = req.params
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
        }
        const json = commonService.common.getCityByCountryId(countryId)
        res.json({...baseResponse, success: true, timestamp: Date.now(), code: StatusCodes.OK, data: json})
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
