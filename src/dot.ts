/**
 * 粒子生成
 */
import global from './global'
import { transformColorObjectToColor, transformColorToColorObject } from './utils'
import { ColorObject, DotInfo } from './interfaces'
import { withStashPanelData, shuffle, randomNumber } from './utils'

const transparentColor = { r: 0, g: 0, b: 0, a: 0 }

export default class Dot {
  x: number
  y: number
  z: number
  color: ColorObject
  radius: number

  constructor(dotInfo: DotInfo) {
    const { x, y, z, color, radius } = dotInfo
    this.x = x
    this.y = y
    this.z = z
    this.color = typeof color === 'string' ? transformColorToColorObject(color) : color
    this.radius = radius
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

interface CreateTextDotsOptions {
  dotRadius?: number
  dotMargin?: number
  fontSize?: number
  fontColor?: string
  translateX?: number
  translateY?: number
  translateZ?: number
}

interface CreateImageDotsOptions {
  dotRadius?: number
  dotMargin?: number
  imageWidth?: number
  imageHeight?: number
  translateX?: number
  translateY?: number
  translateZ?: number
}

interface GenerateDotsOptions {
  data: ImageData
  dotRadius?: number
  dotMargin?: number
  translateX?: number
  translateY?: number
}

const generateDots = (options: GenerateDotsOptions) => {
  const { dotRadius = 3, data: imageData, dotMargin = 0 } = options
  const dots: Dot[] = []

  const interval = (dotRadius + dotMargin) * 2
  for (let x = 0; x < imageData.width; x += interval) {
    for (let y = 0; y < imageData.height; y += interval) {
      const i = (y * imageData.width + x) * 4 - 1
      const r = imageData.data[i - 3]
      const g = imageData.data[i - 2]
      const b = imageData.data[i - 1]
      const a = imageData.data[i]
      const dotInfo = { x, y, z: 0, color: { r, g, b, a }, radius: dotRadius }

      if (imageData.data[i] >= 128) {
        dots.push(new Dot(dotInfo))
      }
    }
  }

  return shuffle(dots)
}

const getDataFromText = (text: string, options: CreateTextDotsOptions) => {
  const panel = global.panel!

  panel.clear()

  const {
    fontSize = 150,
    fontColor = '#666',
    translateX = 0,
    translateY = 0,
  } = options || {}

  panel.drawText(
    text,
    panel.width / 2 + translateX,
    panel.height / 2 + translateY,
    fontColor,
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
    panel.width / 2 + translateX,
    panel.height / 2 + translateY,
    imageWidth,
    imageHeight,
  )

  const imageData = panel.ctx.getImageData(0, 0, panel.width, panel.height)

  panel.clear()

  return imageData
}

export const createDotsFromText = (text: string, options: CreateTextDotsOptions): Dot[] => {
  return withStashPanelData(() => {
    const { dotRadius, dotMargin } = options || {}
    const data = getDataFromText(text, options)

    return generateDots({ dotRadius, dotMargin, data })
  })
}

export const createDotsFromImage = (image: HTMLImageElement, options: CreateImageDotsOptions): Dot[] => {
  return withStashPanelData(() => {
    const { dotRadius, dotMargin } = options
    const imageData = getDataFromImage(image, options)
    return generateDots({ dotRadius, dotMargin, data: imageData })
  })
}

interface CreateRandomDotOptions {
  radius?: number
  color?: ColorObject
  xRange?: { max: number, min: number }
  yRange?: { max: number, min: number }
  zRange?: { max: number, min: number }
}

export const createRandomDot = (options?: CreateRandomDotOptions) => {
  const panel = global.panel!
  const {
    color: initColor = transparentColor,
    radius: initRadius = 4,
    xRange = { min: -panel.width, max: 2 * panel.width },
    yRange = { min: -panel.height, max: 2 * panel.height },
    zRange = { min: -global.perspective, max: global.perspective }
  } = options || {}
  const x = randomNumber(xRange.min, xRange.max)
  const y = randomNumber(yRange.min, yRange.max)
  const z = randomNumber(zRange.min, zRange.max)
  const color = initColor
  const radius = randomNumber(initRadius / 2, initRadius * 2)
  const dotInfo = { x, y, z, color, radius }

  return new Dot(dotInfo)
}

export const createRandomDots = (dotNumber, options?: CreateRandomDotOptions) => {
  return Array.from({ length: dotNumber }).map(() => createRandomDot(options))
}

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

export function supplementDots(dots: Dot[], number: number) {
  const { maxX, maxY, minX, minY } = getLimitFromDots(dots)

  const newDots = createRandomDots(number, {
    xRange: { max: maxX, min: minX },
    yRange: { max: maxY, min: minY },
    zRange: { max: 0, min: 0 },
  })

  return dots.concat(newDots)
}