const baseResponse = require('../dto/baseresponse.dto')
const utils = require('../utils/index')
const companyService = require('../services/index')
const {StatusCodes} = require('http-status-codes')

exports.getAllCompany = async (req, res) => {
    try {
        const json = await companyService.company.listCompany()
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
        const json = await companyService.company.getPersonsById(req)
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

exports.getCompanyById = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await companyService.company.findCompanyById(req)
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

exports.createCompany = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await companyService.company.createCompany(req)
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

exports.updateCompany = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await companyService.company.updateCompany(req)
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

exports.deleteCompanyById = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await companyService.company.deleteCompanyById(req)
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

exports.uploadLogo = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await companyService.company.uploadLogo(req)
        res.status(StatusCodes.OK).json(json)
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
exports.updateLogo = async (req, res) => {
    try {
        const isInvalid = utils.helpers.handleValidation(req)
        if (isInvalid) {
            res.status(StatusCodes.BAD_REQUEST).json({
                ...baseResponse,
                ...isInvalid
            })
            return
        }
        const json = await companyService.company.updateLogo(req)
        res.status(StatusCodes.OK).json(json)
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
