const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight
element.style.left = '0px'
element.style.top = '0px'

const image = new Image()
image.src = './test.jpg'

const dodot = window.dodot
dodot.createPanel(element)

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))

image.onload = async () => {
  const dots = dodot.createDotsFromImage(image, { imageWidth: 300, imageHeight: 300 })
  const animation = dodot.createDotsAnimation([], dots)

  await animation.run()
  await sleep(1000)

  const newDots = dodot.createDotsFromText('I am a Dog')
  const newAnimation = dodot.createDotsAnimation(dots, newDots)
  await newAnimation.run()
}
