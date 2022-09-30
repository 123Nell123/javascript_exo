// Require statement not part of import statement
/* eslint @typescript-eslint/no-var-requires: "off" */
import mainroutes from './routes/mainRoutes'
import { Request, Response } from 'express'
const express = require('express')
const app = express()
const sharp = require('sharp')

const hostname = 'localhost'
const port = 3000

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

app.get('/', (req: Request, res: Response, next: any) => {
    console.log('test')
    res.send('http://localhost:3000/api/main/image')
    next()
})

app.use('/api', mainroutes)

export default app
