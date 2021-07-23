const copyBtn = document.querySelector('.copyBtn')
const imageBtn = document.querySelector('.imageBtn')
const createAsciiBtn = document.querySelector('.createAscii')
const image = document.getElementById('serverFile')
// const closeBtn = document.querySelector('#closeBtn')
let asciiPre = document.getElementById('asciiImage')

let canvas, context, imageObj, imageWidth, imageHeight, imageData, stage, layer

document.addEventListener('DOMContentLoaded', e => {
  canvas = document.createElement('canvas')
  context = canvas.getContext('2d')
  imageObj = new Image()
  imageObj.src = image.src

  imageObj.onload = () => {
    imageWidth = 150
    imageHeight = (150 * imageObj.height) / imageObj.width

    canvas.width = imageWidth
    canvas.height = imageHeight
    context.drawImage(imageObj, 0, 0, imageWidth, imageHeight)
    imageData = context.getImageData(0, 0, imageWidth, imageHeight)
    createAsciiBtn.classList.remove('disabled')
  }
})

createAsciiBtn.addEventListener('click', async e => {
  const resultContainer = document.querySelector('.resultContainer')
  resultContainer.style.visibility = 'visible'

  const data = {
    data: imageData.data.toString(),
    width: imageWidth,
    height: imageHeight
  }

  const response = await fetch('/getImage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })

  const body = await response.json()
  asciiPre.textContent = body.textResult

  copyBtn.classList.remove('disabled')
  imageBtn.classList.remove('disabled')

  $('#mytoast1').toast('show')
})

copyBtn.addEventListener('click', e => {
  const el = document.createElement('textarea')
  el.value = asciiImage.textContent
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  $('#mytoast2').toast('show')
})

imageBtn.addEventListener('click', async e => {
  let section2 = document.querySelector('.section2')
  document.querySelector('.section2 > h1').style.visibility = 'visible'
  
  html2canvas(asciiPre, {
    scale: window.devicePixelRatio * 5,
    encodingOptions: 1,
    onrendered: function (cnv) {
      var screenshot = cnv.toDataURL('image/png')
      let imageFromAscii = document.createElement('img')
      imageFromAscii.classList.add('imageFromAscii')
      imageFromAscii.setAttribute('src', screenshot)
      section2.innerHtml = ''
      section2.appendChild(imageFromAscii)
    }
  })
})
