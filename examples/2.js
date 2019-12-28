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
    fontSize: randomNumber(150, 300),
    translateX: randomNumber(-100, 100),
    translateY: randomNumber(-100, 100),
    color: { r: randomNumber(0, 255), g: randomNumber(0, 255), b: randomNumber(0, 255), a: 199 }
  })
)

const options = { supplementType: 'clone', delay: 500 }
const animation = dodot.createMutiSegmentDotsAnimation(dotsArr, options)

animation.run()
