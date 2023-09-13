const express = require('express')
const app = express()
const cors = require('cors')
const {default: helmet} = require('helmet')
const router = require('./router/index')
const PORT = process.env.PORT || 5001
const configs = require('./configs/index')
const db = require('./db/index')
const consts = require('./consts/index')
const middlewares = require('./middleware/index')
const utils = require('./utils/index')

configs.serverConfig.initialServerConfig()
utils.helpers.createUploadDir('./uploads')

app.use('/uploads', express.static('uploads'))

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use(middlewares.loggerMiddleware)
app.use(middlewares.authMiddleware)

app.use(`${process.env.APP_PREFIX}${consts.router.COMMON}`, router.commonRouter.common)
app.use(`${process.env.APP_PREFIX}${consts.router.COMPANY}`, router.companyRouter.company)
app.use(`${process.env.APP_PREFIX}${consts.router.PERSON}`, router.personRouter.person)
app.use(`${process.env.APP_PREFIX}${consts.router.TITLES}`, router.titlesRouter.titles)
app.use(`${process.env.APP_PREFIX}${consts.router.AUTH}`, router.authRouter.auth)

db.mongooseConnection.connectToMongoDb(process.env.MONGO_CONNECTION, process.env.MONGODB_MIN_POOL_SIZE,
    process.env.MONGODB_MAX_POOL_SIZE,
    process.env.MONGODB_CONNECTION_TIMEOUT).then(() => {
    app.listen(PORT, () => {
    })
})

