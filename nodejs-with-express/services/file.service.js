const utils = require('../utils/index')
const upload = require('../middleware/singleimageupload.middleware')
const uploadCv = require('../middleware/singlecvupload.middleware')
const multer = require('multer')

exports.uploadImage = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                reject(err)
            } else if (err) {
                reject(err)
            }
            const ip = await utils.helpers.getHost()
            const filePath = process.env.FILE_PATH
            const fileName = req.file.filename
            const fileString = `${ip}${filePath}${fileName}`
            resolve(fileString)
        })
    })
}


exports.uploadCv = (req, res) => {
    return new Promise((resolve, reject) => {
        uploadCv(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                reject(err)
            } else if (err) {
                reject(err)
            }
            const ip = await utils.helpers.getHost()
            const filePath = process.env.FILE_PATH
            const fileName = req.file.filename
            const fileString = `${ip}${filePath}${fileName}`
            resolve(fileString)

        })
    })
}
