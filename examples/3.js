/**
 * 倒计时效果
 */
const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight

const dodot = window.dodot
const panel = dodot.createPanel(element)

dodot.utils.showFps()

const randomNumber = dodot.utils.randomNumber

const texts = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']

const dotsArr = texts.map((letter, index) => {
  const color = {
    r: 120 + index * 12,
    g: 200 - index * 10,
    b: 120 - index * 10,
    a: 199,
  }

  return dodot.createDotsFromText(letter, {
    fontSize: 280,
    color,
  })
})


const randomDots = dodot.createRandomDots(dotsArr[dotsArr.length - 1].length, {
  color: '#f93'
})

const image = new Image()
image.src = './test.jpg'

image.onload = async () => {

  const imageDots = dodot.createDotsFromImage(image, { imageWidth: 300, imageHeight: 300 })
  dotsArr.push(randomDots, imageDots)

  const options = {
    supplementType: 'clone',
    delay: texts.map((text, index) => index === texts.length - 1 ? 1000 : 500),
    tweenType: texts.map((text, index) => index === texts.length - 1 ? 'Sine' : 'Back'),
    totalFrame: texts.map((text, index) => index === texts.length - 1 ? 100 : 30),
  }

  const animation = dodot.createMutiSegmentDotsAnimation(dotsArr, options)

  animation.run()
}

