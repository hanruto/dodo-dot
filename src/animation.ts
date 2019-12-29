/**
 * 动画控制器
 */
import Tween from './tween'
import Dot, { supplementDots, createRandomDots, createDot } from './dot'
import { TweenType, AnimationStatusEnum, SupplementType } from './constants'
import global from './global'
import { sleep } from './utils'


interface Options {
  supplementType?: SupplementType
  tweenType?: TweenType
  delay?: number
  totalFrame?: number
}

export const createDotsAnimation = (fromDots: Dot[], toDots: Dot[] = [], options: Options = {}) => {
  const tweenType = options.tweenType || TweenType.Sine
  const tweenFn = Tween[tweenType].easeOut
  const linearFn = Tween.Linear
  const totalFrame = options.totalFrame || 60
  const panel = global.panel!
  const supplementType = options.supplementType || SupplementType.CONVERGENCE
  const delay = options.delay || 0

  // 补充策略
  const dotsCount = Math.max(fromDots.length, toDots.length)
  
  global.dotsCount = dotsCount

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
          const x = parseInt(tweenFn(currentFrame, fromX, toX - fromX, totalFrame))
          const y = parseInt(tweenFn(currentFrame, fromY, toY - fromY, totalFrame))
          const z = parseInt(tweenFn(currentFrame, fromZ, toZ - fromZ, totalFrame))
          const color = {
            r: parseInt(linearFn(currentFrame, fromColor.r, toColor.r - fromColor.r, totalFrame)),
            g: parseInt(linearFn(currentFrame, fromColor.g, toColor.g - fromColor.g, totalFrame)),
            b: parseInt(linearFn(currentFrame, fromColor.b, toColor.b - fromColor.b, totalFrame)),
            a: parseInt(linearFn(currentFrame, fromColor.a, toColor.a - fromColor.a, totalFrame))
          }
          const shape = fromDot.shape
          const radius = parseInt(linearFn(currentFrame, fromRadius, toRadius - fromRadius, totalFrame))

          currentDots.push(createDot({ x, y, z, color, radius, shape }))
        }

        panel.clear()
        panel.drawDots(currentDots)

        if (currentFrame < totalFrame) {
          currentFrame++
          timer = requestAnimationFrame(loop)
        } else {
          panel.clear()
          panel.drawDots(toDots)
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

type MutiSegmentOptions = { 
  delay?: number[] | number
  supplementType?: SupplementType[] | SupplementType
  totalFrame?: number[] | number
  tweenType?: TweenType[] | TweenType
}

export const createMutiSegmentDotsAnimation = (dotsArr: Dot[][], options: MutiSegmentOptions) => {
  let currentAnimation
  let currentIndex = 0

  const runByIndex = async (index: number) => {
    currentIndex = index

    const delay = options.delay 
      && (typeof options.delay === 'number' ? options.delay : options.delay[currentIndex])

    const tweenType = options.tweenType 
      && (typeof options.tweenType === 'string' ? options.tweenType : options.tweenType[currentIndex])

    const supplementType = options.supplementType 
      && (typeof options.supplementType === 'string' ? options.supplementType : options.supplementType[currentIndex])

    const totalFrame = options.totalFrame 
      && (typeof options.totalFrame === 'number' ? options.totalFrame : options.totalFrame[currentIndex])
    
    currentAnimation = createDotsAnimation(
      dotsArr[currentIndex], 
      dotsArr[currentIndex+1], 
      { delay, tweenType, supplementType, totalFrame }
    )

    return await currentAnimation.run()
  }

  const runAnimation = async () => {
    for (let i = 0; i < dotsArr.length - 1; i++) {
      await runByIndex(i)
    }
  }

  const stopAnimation = () => {
    currentAnimation.stop()
  }

  const continueAnimation = async () => {
    await currentAnimation.continue()
    for (let i = currentIndex + 1; i < dotsArr.length - 1; i++) {
      await runByIndex(i)
    }
  }
  
  return {
    run: runAnimation,
    stop: stopAnimation,
    continue: continueAnimation,
  }
}
