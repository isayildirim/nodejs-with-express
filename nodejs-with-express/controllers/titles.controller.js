const baseResponse = require('../dto/baseresponse.dto')
const utils = require('../utils/index')
const titleService = require('../services/index')
const {StatusCodes} = require('http-status-codes')

exports.getAllTitles = async (req, res) => {
    try {
        const json = await titleService.title.listTitles()
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


exports.getPersonsById = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await titleService.title.findPersonById(req)
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

exports.getTitlesById = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await titleService.title.findTitleById(req)
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

exports.createTitle = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await titleService.title.createTitle(req)
        res.status(StatusCodes.CREATED).json({
            ...baseResponse,
            data: json,
            success: true,
            timestamp: Date.now(),
            code: StatusCodes.CREATED
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

exports.updateTitle = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await titleService.title.updateTitle(req)
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

exports.deleteTitle = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await titleService.title.deleteTitleById(req)
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
