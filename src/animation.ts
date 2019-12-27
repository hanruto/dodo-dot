/**
 * 动画控制器
 */
import Tween from './tween'
import Dot, { supplementDots, createRandomDots } from './dot'
import { TweenType, AnimationStatusEnum, SupplementType } from './constants'
import global from './global'
import { sleep } from './utils'


interface Options {
  supplementType?: SupplementType
  tweenType?: TweenType
  delay?: number
}

export const createDotsAnimation = (fromDots: Dot[], toDots: Dot[] = [], options: Options = {}) => {
  const tweenType = options.tweenType || TweenType.Sine
  const tweenFn = Tween[tweenType].easeOut
  const linearFn = Tween.Linear
  const totalFrame = 60
  const panel = global.panel!
  const supplementType = options.supplementType || SupplementType.CONVERGENCE
  const delay = options.delay || 0

  // 补充策略
  const dotsCount = Math.max(fromDots.length, toDots.length)

  if (!fromDots.length) {
    fromDots = createRandomDots(dotsCount)
  }

  if (!toDots.length) {
    toDots = createRandomDots(dotsCount)
  }

  if (fromDots.length && fromDots.length < dotsCount) {
    fromDots = supplementDots(fromDots, dotsCount - fromDots.length, supplementType)
  }

  if (toDots.length && toDots.length < dotsCount) {
    toDots = supplementDots(toDots, dotsCount - toDots.length, supplementType)
  }

  // 动画策略
  let currentFrame = 0
  let currentStatus = AnimationStatusEnum.STOP
  let timer = 0

  const animate = async () => {
    panel.clear()

    panel.drawDots(fromDots)
    
    if(delay > 0) {
      await sleep(delay)
    }

    return await new Promise(resolve => {
      const loop = () => {
        if (currentStatus === AnimationStatusEnum.STOP) {
          cancelAnimationFrame(timer)
          return
        }

        const currentDots: Dot[] = []

        for (let i = 0; i < dotsCount; i++) {
          const toDot = toDots[i]
          const fromDot = fromDots[i]
          const { x: fromX, y: fromY, z: fromZ, color: fromColor, radius: fromRadius } = fromDot
          const { x: toX, y: toY, z: toZ, color: toColor, radius: toRadius } = toDot
          const x = tweenFn(currentFrame, fromX, toX - fromX, totalFrame)
          const y = tweenFn(currentFrame, fromY, toY - fromY, totalFrame)
          const z = tweenFn(currentFrame, fromZ, toZ - fromZ, totalFrame)
          const color = {
            r: linearFn(currentFrame, fromColor.r, toColor.r - fromColor.r, totalFrame),
            g: linearFn(currentFrame, fromColor.g, toColor.g - fromColor.g, totalFrame),
            b: linearFn(currentFrame, fromColor.b, toColor.b - fromColor.b, totalFrame),
            a: linearFn(currentFrame, fromColor.a, toColor.a - fromColor.a, totalFrame)
          }
          const radius = linearFn(currentFrame, fromRadius, toRadius - fromRadius, totalFrame)

          currentDots.push(new Dot({ x, y, z, color, radius }))
        }

        panel.clear()
        panel.drawDots(currentDots)

        if (currentFrame < totalFrame) {
          currentFrame++
          timer = requestAnimationFrame(loop)
        } else {
          resolve()
        }
      }

      loop()
    })
  }

  const runAnimation = () => {
    currentFrame = 0
    currentStatus = AnimationStatusEnum.RUN
    return animate()
  }

  const stopAnimation = () => {
    currentStatus = AnimationStatusEnum.STOP
  }

  const continueAnimation = () => {
    currentStatus = AnimationStatusEnum.RUN
    return animate()
  }

  return {
    run: runAnimation,
    stop: stopAnimation,
    continue: continueAnimation,
  }
}


export const createMutiSegmentDotsAnimation = (dotsArr: Dot[][], options: Options) => {
  let currentAnimation
  let currentIndex = 0

  const runAnimation = async () => {
    for (let i = 0; i < dotsArr.length - 1; i++) {
      currentIndex = i
      currentAnimation = createDotsAnimation(dotsArr[i], dotsArr[i+1], options)
      await currentAnimation.run()
    }
  }

  const stopAnimation = () => {
    currentAnimation.stop()
  }

  const continueAnimation = async () => {
    await currentAnimation.continue()
    for (let i = currentIndex + 1; i < dotsArr.length - 1; i++) {
      currentIndex = i
      currentAnimation = createDotsAnimation(dotsArr[i], dotsArr[i+1], options)
      await currentAnimation.run()
    }
  }
  
  return {
    run: runAnimation,
    stop: stopAnimation,
    continue: continueAnimation,
  }
}