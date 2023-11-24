import { AppDataSource } from './data-source'
const { app } = require('./server')


AppDataSource.initialize().then(() => {

    app.listen(process.env.SERVER_PORT || 3000, () => console.log(`Server on-line on port ${process.env.SERVER_PORT}`))

})

