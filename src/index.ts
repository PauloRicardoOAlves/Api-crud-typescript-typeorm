import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(routes)

    app.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server on-line on port ${process.env.SERVER_PORT}`))
})