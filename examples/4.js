/**
 * 随机色和形状
 */
const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight

const dodot = window.dodot
const panel = dodot.createPanel(element)

dodot.utils.showFps()

const randomNumber = dodot.utils.randomNumber

const texts = 'Hello world'

async function animate() {
  const dots1 = dodot.createDotsFromText('Hello, World', {
    shape: 'rect',
    color: '#f93',
    randomColorRange: { min: -40, max: 40 }
  })

  const dots2 = dodot.createRandomDots(dots1.length, {
    color: '#999',
    shape: 'rect'
  })

  const dots3 = dodot.createDotsFromText('Bye Bye, World', {
    shape: 'rect',
    color: '#39f',
    randomColorRange: { min: -60, max: 60 },
  })

  const animation1 = dodot.createDotsAnimation(dots1, dots2, { delay: 1000 })
  const animation2 = dodot.createDotsAnimation(dots2, dots3, { delay: 100 })

  await animation1.run()
  await animation2.run()
}

animate()
