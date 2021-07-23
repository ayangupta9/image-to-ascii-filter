const express = require('express')
const multer = require('multer')
const ejs = require('ejs')
const path = require('path')
const textToImage = require('text-to-image')
const app = express()

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(
  express.json({ type: ['application/json', 'text/plain'], limit: '50mb' })
)
app.set('views', './views')

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
}).single('uploadedImg')

let asciiResult = ''
let imageFileName

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
  const x = greyScale / 255
  let val
  if (x >= 0.0 && x <= 0.1) val = ' '
  else if (x > 0.1 && x < 0.2) val = '.'
  else if (x >= 0.2 && x < 0.3) val = '-'
  else if (x >= 0.3 && x < 0.4) val = ':'
  else if (x >= 0.4 && x < 0.5) val = '*'
  else if (x >= 0.5 && x < 0.6) val = 'e'
  else if (x >= 0.6 && x < 0.7) val = '▒'
  else if (x >= 0.7 && x < 0.8) val = '#'
  else if (x >= 0.8 && x < 0.9) val = '@'
  else if (x >= 0.9 && x <= 1.0) val = '▓'

  return val
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

app.post('/getImage', async (req, res) => {
  if (req.body) {
    console.log('receieved data')
  }

  let imageData = req.body.data.split(',').map(Number)
  let width = parseInt(req.body.width)
  let height = parseInt(req.body.height)

  let greyScales = convertToGreyScales(imageData, width, height)
  const asciiFinal = drawAscii(greyScales, width)

  const sendBack = {
    textResult: asciiFinal
  }

  res.json(sendBack)
})

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log('Encountered error!', err)
    } else {
      if (req.file == undefined) {
        console.log('Encountered Error')
      } else {
        console.log(req.file)
        imageFileName = req.file.filename
        res.redirect('/uploadImage')
      }
    }
  })
})

app.get('/uploadImage', (req, res) => {
  res.render('asciiResult', { file: `uploads/${imageFileName}` })
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Listening at 3000...')
})

app.get('/public/style', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/assets/style.css'))
})

app.post('/imageFromAscii', async (req, res) => {
  console.log(req.body.textContent)

  const dataUri = await textToImage.generate(req.body.textContent, {
    debug: true,
    fontSize: 4.5,
    fontFamily: 'Arial',
    lineHeight: 3,
    bgColor: 'black',
    textColor: 'white'
  })

  console.log(dataUri)

  res.json({
    dataUri: dataUri
  })
})
