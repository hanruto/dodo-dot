/**
 * 粒子生成
 */
import global from './global'
import { transformColorObjectToColor, transformColorToColorObject } from './utils'
import { ColorObject, DotInfo } from './interfaces'
import { SupplementType, Shape } from './constants'
import { withStashPanelData, shuffle, randomNumber, randomColor } from './utils'


interface CreateDotsOption {
  radius?: number
  color?: string | ColorObject
  translateX?: number
  translateY?: number
  randomColorRange?: { min: number, max: number }
  shape?: string
}

interface CreateRandomDotOptions extends CreateDotsOption {
  xRange?: { max: number, min: number }
  yRange?: { max: number, min: number }
  zRange?: { max: number, min: number }
}

interface CreateTextDotsOptions extends CreateDotsOption{
  margin?: number
  fontSize?: number
}

interface CreateImageDotsOptions extends CreateDotsOption{
  margin?: number
  imageWidth?: number
  imageHeight?: number
}

interface CreateDotFromImageDataOptions extends CreateDotsOption{
  data: ImageData
  margin?: number
}

const defaultDotRadius = 6
const transparentColor = 'rgba(255, 255, 255, 0)'

/**
 * 获取粒子范围的边界
 */
function getLimitFromDots(dots: Dot[]) {
  let maxX = Number.NEGATIVE_INFINITY
  let maxY = Number.NEGATIVE_INFINITY
  let minX = Number.POSITIVE_INFINITY
  let minY = Number.POSITIVE_INFINITY

  dots.forEach(dot => {
    dot.x > maxX && (maxX = dot.x)
    dot.y > maxY && (maxY = dot.y)
    dot.x < minX && (minX = dot.x)
    dot.y < minY && (minY = dot.y)
  })

  return { maxX, maxY, minX, minY }
}

const getDataFromText = (text: string, options: CreateTextDotsOptions) => {
  const panel = global.panel!

  panel.clear()

  const {
    fontSize = 150,
    color = '#666',
    translateX = 0,
    translateY = 0,
  } = options || {}

  panel.drawText(
    text,
    panel.width / 2 + translateX,
    panel.height / 2 + translateY,
    typeof color === 'string' ? color : transformColorObjectToColor(color),
    fontSize + 'px impact',
    'center'
  )

  const imageData = panel.ctx.getImageData(0, 0, panel.width, panel.height)

  panel.clear()

  return imageData
}

const getDataFromImage = (image: HTMLImageElement, options: CreateImageDotsOptions) => {
  const panel = global.panel!

  panel.clear()

  const {
    imageWidth = image.width,
    imageHeight = image.height,
    translateX = 0,
    translateY = 0,
  } = options || {}

  panel.drawImage(
    image,
    panel.width / 2 + translateX - imageWidth / 2,
    panel.height / 2 + translateY - imageHeight / 2,
    imageWidth,
    imageHeight,
  )

  const imageData = panel.ctx.getImageData(0, 0, panel.width, panel.height)

  panel.clear()

  return imageData
}

export default class Dot {
  x: number
  y: number
  z: number
  color: ColorObject
  radius: number
  shape: string

  constructor(dotInfo: DotInfo) {
    const { x, y, z, color, radius, shape, randomColorRange } = dotInfo
    this.x = x
    this.y = y
    this.z = z
    this.color = typeof color === 'string' 
      ? transformColorToColorObject(color, { randomColorRange })
      : randomColor(color, randomColorRange)
    
    this.radius = radius || defaultDotRadius
    this.shape = shape || Shape.ARC
  }

  paint = () => {
    const { perspective, panel } = global

    if (!panel) return new Error('Please init panel before paint dot.')

    const color = typeof this.color === 'string' ? this.color : transformColorObjectToColor(this.color)
    const scale = Number((perspective / (perspective + this.z)).toFixed(2))

    this.x = parseInt(Math.abs(panel.width / 2 + (this.x - panel.width / 2) * scale).toString(), 10)
    this.y = parseInt(Math.abs(panel.height / 2 + (this.y - panel.height / 2) * scale).toString(), 10)

    panel.drawBall(this.x, this.y, this.radius * scale, color)
  }
}

export const createDot = (dotInfo: DotInfo) => {
  return new Dot(dotInfo)
}

export const createDots = (dataInfoArr: DotInfo[]) => {
  return dataInfoArr.map((dotInfo) => new Dot(dotInfo))
}

export const createDotFromImageData = (options: CreateDotFromImageDataOptions) => {
  const { radius = 3, data: imageData, margin = 0, randomColorRange, shape } = options
  const dots: Dot[] = []

  const interval = (radius + margin) * 2
  for (let x = 0; x < imageData.width; x += interval) {
    for (let y = 0; y < imageData.height; y += interval) {
      const i = (y * imageData.width + x) * 4 - 1
      const r = imageData.data[i - 3]
      const g = imageData.data[i - 2]
      const b = imageData.data[i - 1]
      const a = imageData.data[i]
      const dotInfo = { 
        x, 
        y, 
        z: 0, 
        color: { r, g, b, a }, 
        radius, 
        randomColorRange, shape
      }

      if (imageData.data[i] >= 128) {
        dots.push(createDot(dotInfo))
      }
    }
  }

  return shuffle(dots)
}

export const createDotsFromText = (text: string, options: CreateTextDotsOptions): Dot[] => {
  return withStashPanelData(() => {
    const { radius, margin, shape, randomColorRange } = options || {}
    const data = getDataFromText(text, options)
    return createDotFromImageData({ radius, margin, data, shape, randomColorRange })
  })
}

export const createDotsFromImage = (image: HTMLImageElement, options: CreateImageDotsOptions): Dot[] => {
  return withStashPanelData(() => {
    const { radius, margin } = options
    const imageData = getDataFromImage(image, options)
    return createDotFromImageData({ radius, margin, data: imageData })
  })
}

export const createRandomDot = (options?: CreateRandomDotOptions) => {
  const panel = global.panel!
  const {
    color: initColor = transparentColor,
    radius: initRadius = defaultDotRadius,
    xRange = { min: -panel.width, max: 2 * panel.width },
    yRange = { min: -panel.height, max: 2 * panel.height },
    zRange = { min: -global.perspective, max: global.perspective },
    randomColorRange,
    shape,
  } = options || {}
  
  const x = randomNumber(xRange.min, xRange.max)
  const y = randomNumber(yRange.min, yRange.max)
  const z = randomNumber(zRange.min, zRange.max)
  const color = initColor
  const radius = randomNumber(initRadius / 2, initRadius * 2)
  const dotInfo = { x, y, z, color, radius, randomColorRange, shape }

  return createDot(dotInfo)
}

export const createRandomDots = (dotNumber, options?: CreateRandomDotOptions) => {
  return Array.from({ length: dotNumber }).map(() => createRandomDot(options))
}

export function supplementDots(dots: Dot[], number: number, type: SupplementType) {
  if (type !== SupplementType.CLONE) {
    const panel = global.panel!
    const isConvergence = type === SupplementType.CONVERGENCE
    const limit = getLimitFromDots(dots)
    const maxX = isConvergence ? limit.maxX : 2 * panel.width
    const minX = isConvergence ? limit.minX : -1 * panel.width
    const maxY = isConvergence ? limit.maxY : 2 * panel.height
    const minY = isConvergence ? limit.minY : -1 * panel.height

    const newDots = createRandomDots(number, {
      xRange: { max: maxX, min: minX },
      yRange: { max: maxY, min: minY },
      zRange: { max: 0, min: 0 },
    })

    return dots.concat(newDots)
  } else {
    const newDots: Dot[] = []
    const length = dots.length

    for (let i = 0; i < number; i++) {
      newDots.push(dots[randomNumber(0, length)])
    }

    return dots.concat(newDots)
  }
}