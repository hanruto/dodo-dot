/**
 * 多段动画，点偏移
 */
const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight

const dodot = window.dodot
const panel = dodot.createPanel(element)

dodot.utils.showFps()

const randomNumber = dodot.utils.randomNumber
const dotsArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
  dodot.createDotsFromText(letter, {
    radius: 5,
    fontSize: randomNumber(200, 400),
    translateX: randomNumber(-100, 100),
    translateY: randomNumber(-100, 100),
    color: { r: randomNumber(64, 127), g: randomNumber(129, 180), b: randomNumber(220, 255), a: 190 }
  })
)

const options = { supplementType: 'clone', delay: 500, totalFrame: 40 }
const animation = dodot.createMutiSegmentDotsAnimation(dotsArr, options)

animation.run()
