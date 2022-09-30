/* eslint @typescript-eslint/no-var-requires: "off" */

import { Request, Response } from 'express'
import myResizer from '../api/imagePlacer'

const express = require('express')
const image = express.Router()

//resizer
image.use('/image.resize/:length', (req: Request, res: Response): void => {
    console.log('length:', req.params.length)
    res.send('image resized est size :' + length)

    //pb pour appelle de myResizer ici
    myResizer(req.params.length)
})

export default image
