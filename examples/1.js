const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight
element.style.left = '0px'
element.style.top = '0px'

const image = new Image()
image.src = './test.jpg'

const dodot = window.dodot
const panel = dodot.createPanel(element)

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))

image.onload = async () => {

  const dots = dodot.createDotsFromImage(image, { imageWidth: 400, imageHeight: 400, radius: 10, margin: 3 })
  const randomDots = dodot.createRandomDots(dots.length, { color: { r: 0, g: 0, b: 0, a: 127 } })

  panel.drawDots(dots)

  await sleep(1000)

  const animation = dodot.createDotsAnimation(dots, randomDots)

  await animation.run()

  const textDots = dodot.createDotsFromText('I am a Dog')
  const newAnimation = dodot.createDotsAnimation(randomDots, textDots)

  await newAnimation.run()
}
