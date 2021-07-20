const express = require('express')
const multer = require('multer')
const ejs = require('ejs')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(
  express.json({ type: ['application/json', 'text/plain'], limit: '50mb' })
)

const greyRamp = ' _.,:~=+°*aev?#%@$░▒▓█'.split('')

const rampLength = greyRamp.length

let asciiResult = ''

const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b

const convertToGreyScales = (imageDataReceived, width, height) => {
  let greyScales = []

  for (let i = 0; i < imageDataReceived.length; i += 4) {
    const r = imageDataReceived[i]
    const g = imageDataReceived[i + 1]
    const b = imageDataReceived[i + 2]

    const greyScale = toGrayScale(r, g, b)
    imageDataReceived[i] = imageDataReceived[i + 1] = imageDataReceived[
      i + 2
    ] = greyScale
    greyScales.push(greyScale)
  }

  return greyScales
}

const getCharForGreyScale = greyScale => {
  return greyRamp[Math.ceil(((rampLength - 1) * greyScale) / 255)]
}

const drawAscii = (greyScales, width) => {
  let nextChars
  asciiResult = ''
  for (let i = 0; i < greyScales.length; i++) {
    nextChars = getCharForGreyScale(greyScales[i])
    if ((i + 1) % width === 0) {
      nextChars += '\n'
    }
    asciiResult += nextChars
  }

  return asciiResult
}

app.post('/getImage', (req, res) => {
  if (req.body) {
    console.log('receieved data')
  }

  let imageData = req.body.data.split(',').map(Number)
  let width = parseInt(req.body.width)
  let height = parseInt(req.body.height)

  let greyScales = convertToGreyScales(imageData, width, height)
  const asciiFinal = drawAscii(greyScales, width)

  res.send(asciiFinal)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.listen(3000, () => {
  console.log('Listening at 3000...')
})
