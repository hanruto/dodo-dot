const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight
element.style.left = '0px'
element.style.top = '0px'

const dodot = window.dodot

const panel = dodot.createPanel(element)
const dots = dodot.createDotsFromText('Hello World')
const newDots = dodot.createDotsFromText('ByeBye World')

panel.drawDots(dots)

// const animation = dodot.createDotsAnimation([], newDots)

const animation = dodot.createDotsAnimation(dots, newDots)

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

async function animate() {
  animation.start()
}

async function animate() {
  animation.start()
}

animate()