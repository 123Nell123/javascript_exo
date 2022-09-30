// Require statement not part of import statement
/* eslint @typescript-eslint/no-var-requires: "off" */
import imager from './routeMetier/routeImager'

import { Request, Response } from 'express'
import express from 'express'
//create a Routes for the endpoint
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    console.log('Time from router:', Date.now())
})

router.use('/main', imager)

export default router
