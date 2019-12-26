import global from './global'
import { transformColorObjectToColor } from './utils'
import { ColorObject, DotInfo } from './interfaces'
import { withStashPanelData, shuffle } from './utils'

export default class Dot{
  x: number
  y: number
  z: number
  color: string | ColorObject
  radius: number

  constructor(dotInfo: DotInfo){
    const {x, y, z, color, radius} = dotInfo
    this.x = x
    this.y = y
    this.z = z
    this.color = color
    this.radius = radius
  }

  paint = () => {
    const { perspective, panel } = global

    if(!panel) return new Error('Please init panel before paint dot.')

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

interface GenerateDotsOptions {
  imageData: ImageData
  dotRadius?: number
  dotMargin?: number
  translateX?: number
  translateY?: number
}

export const generateDots = (options: GenerateDotsOptions) => {
  const { dotRadius = 3, imageData, dotMargin = 0 } = options
  const dots: Dot[] = []

  const interval = (dotRadius + dotMargin) * 2
  for (let x = 0; x < imageData.width; x += interval) {
    for (let y = 0; y < imageData.height; y += interval) {
      const i = (y * imageData.width + x) * 4 - 1
      const r = imageData.data[i - 3]
      const g = imageData.data[i - 2]
      const b = imageData.data[i - 1]
      const a = imageData.data[i]
      const dotInfo = { x, y, z: 0, color: {r, g, b, a}, radius: dotRadius }

      if (imageData.data[i] >= 128) {
        dots.push(new Dot(dotInfo))
      }
    }
  }

  return shuffle(dots)
}

export const getTextData = (text: string, options: CreateTextDotsOptions) => {
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

export const createDotsFromText = (text: string, options: CreateTextDotsOptions): Dot[] => {
  return withStashPanelData(() => {
    const { dotRadius, dotMargin } = options || {}
    const imageData = getTextData(text, options)
  
    return generateDots({ dotRadius, dotMargin, imageData })
  })
}

export const createDotsFromImage = () => {

}

export const createRandomDot = () => {

}

export const createRandomDots = () => {

}

export const paintDots = (dots: Dot[]) => {
  dots.forEach(dot => dot.paint())
}
