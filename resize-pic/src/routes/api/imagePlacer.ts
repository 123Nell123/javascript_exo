/*
En tant que simple API d'espace réservé, 
la première vous permet de placer des images dans votre frontend 
avec la taille définie via les paramètres d'URL 
(et une stylisation supplémentaire si vous le souhaitez) pour un prototypage rapide. 
*/
/* eslint @typescript-eslint/no-var-requires: "off" */

const sharp = require('sharp')

const fileI = 'plante.jpg'
const path = 'src/public/'
const fileInput = path + fileI
const fileOutput = path + 'modif_' + fileI

// Read image data from readableStream,
// resize to 300 pixels wide,
// emit an 'info' event with calculated dimensions
// and finally write image data to writableStream

// Read image data from readableStream,
// resize to 300 pixels wide,
// emit an 'info' event with calculated dimensions
// and finally write image data to writableStream
const myResizer = async (length: any) => {
    const mypromise = await sharp(fileInput).resize(length).toFile(fileOutput)
    console.log('fini apriori ok')
}

export default myResizer
