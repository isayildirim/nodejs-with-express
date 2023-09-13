const mongoose = require('mongoose')
const Logger = require('../utils/logger')

exports.connectToMongoDb = async (mongoConnection, minPoolSize, maxPoolSize, connectTimeoutMS) => {
    try {
        await mongoose.connect(`${mongoConnection}`, {
            compressors: "zlib",
            autoIndex: true,
            minPoolSize,
            maxPoolSize,
            connectTimeoutMS
        })
        Logger.logger.info('Connected to MongoDB')
    } catch (error) {
        Logger.logger.info(`Error ${error.message}`)
        throw new Error(error.message)
    }
}
