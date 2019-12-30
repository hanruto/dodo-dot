/**
 * 渲染优化
 */
const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight

const dodot = window.dodot
const panel = dodot.createPanel(element)

dodot.utils.showFps()

const randomNumber = dodot.utils.randomNumber

const texts = 'Hello world'

// test1: 2162 dots; 47.5 fps; arc
// async function animate() {
//   const dots1 = dodot.createDotsFromText('Morning, World!', {
//     color: '#f93',
//     randomColorRange: { min: -40, max: 40 }
//   })

//   const dots2 = dodot.createRandomDots(dots1.length, {
//     color: '#999',
//   })

//   const animation1 = dodot.createDotsAnimation(dots1, dots2)
//   const animation2 = dodot.createDotsAnimation(dots2, dots1, { tweenType: 'Bounce' })

//   await animation1.run()
//   await animation2.run()
//   // await new Promise(resolve => setTimeout(resolve, 200))
//   await animate()
// }

// test2: 2869 dots; 57.0 fps; rect
async function animate() {
  const dots1 = dodot.createDotsFromText('Halo, World!', {
    color: '#f93',
    // shape: 'rect',
    randomColorRange: { min: -40, max: 40 },
    radius: 3,
  })

  const dots2 = dodot.createRandomDots(dots1.length, {
    // shape: 'rect',
    color: '#39f',
    randomColorRange: { min: -40, max: 40 },
    radius: 5,
  })

  const animation1 = dodot.createDotsAnimation(dots1, dots2)
  const animation2 = dodot.createDotsAnimation(dots2, dots1, { tweenType: 'Bounce' })

  await animation1.run()
  await animation2.run()
  await animate()
}

animate()
