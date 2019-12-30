/**
 * 创建随机粒子，图片粒子，文字粒子
 */
const element = document.getElementById('panel')

element.width = window.innerWidth
element.height = window.innerHeight
element.style.left = '0px'
element.style.top = '0px'

const image = new Image()
image.src = './test.jpg'

const dodot = window.dodot
const panel = dodot.createPanel(element)

dodot.utils.showFps()

image.onload = async () => {
  const imageDots = dodot.createDotsFromImage(image, { imageWidth: 300, imageHeight: 300 })
  const randomDots = dodot.createRandomDots(imageDots.length, { color: 'rgba(255, 192, 100, 180)' })
  const textDots = dodot.createDotsFromText('I am a dog!', { color: '#f9a' })

  const leaveAnimation = dodot.createDotsAnimation(imageDots, randomDots, { delay: 1000 })
  const enterAnimation = dodot.createDotsAnimation(randomDots, textDots, {
    delay: 100,
    supplementType: 'clone',
    tweenType: 'Bounce',
  })

  await leaveAnimation.run()
  await enterAnimation.run()
}
