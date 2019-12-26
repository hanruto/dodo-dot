const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight
element.style.left = '0px'
element.style.top = '0px'

const dodot = window.dodot

dodot.createPanel(element)

const dots = dodot.createDotsFromText('hello world')

dodot.paintDots(dots)

const randomDots = dodot.createRandomDots(dots.length)

const animation = dodot.createDotsAnimation(dots, randomDots)

animation.start()
