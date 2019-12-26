const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight
element.style.left = '0px'
element.style.top = '0px'

const dodot = window.dodot
const panel = dodot.createPanel(element)
const dots = dodot.createDotsFromText('Hello World')
const newDots = dodot.createDotsFromText('ByeBye World')
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

panel.drawDots(dots)

const animation = dodot.createDotsAnimation(dots, newDots)

async function animate() {
  await sleep(1000)
  animation.run()
}

animate()
