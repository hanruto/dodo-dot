/* 画板 */

import global from './global'
import Dot from './dot'
import { transformColorObjectToColor } from './utils'


export default class Panel {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number

  constructor(element: HTMLCanvasElement) {
    this.canvas = element
    this.ctx = this.canvas.getContext('2d')!
    this.width = element.width
    this.height = element.height
  }

  drawBall = (x: number, y: number, radius: number, color: string) => {
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
    this.ctx.fillStyle = color
    this.ctx.fill()
  }

  drawText = (text: string, x: number, y: number, color: string, font?: string, align?: CanvasTextAlign) => {
    this.ctx.font = font ? font : '微软雅黑 16px'
    this.ctx.textAlign = align ? align : 'center'
    this.ctx.fillStyle = color
    this.ctx.fillText(text, x, y)
  }

  drawImage = (image: HTMLImageElement, x: number, y: number, width: number, height: number) => {
    this.ctx.drawImage(image, x, y, width, height)
  }

  clear = (x?: number, y?: number) => {
    const cx = x ? x : this.width
    const cy = y ? y : this.height
    this.ctx.clearRect(0, 0, cx, cy)
  }

  drawDot = (dot: Dot) => {
    const { perspective } = global
    const { x, y, z, color, radius } = dot
    const computedColor = transformColorObjectToColor(color)
    const scale = Number((perspective / (perspective + z)).toFixed(2))
    const computedX = parseInt(Math.abs(this.width / 2 + (x - this.width / 2) * scale).toString(), 10)
    const computedY = parseInt(Math.abs(this.height / 2 + (y - this.height / 2) * scale).toString(), 10)

    this.drawBall(computedX, computedY, radius * scale, computedColor)
  }

  drawDots = (dots: Dot[]) => {
    dots.forEach(dot => this.drawDot(dot))
  }
}

export const createPanel = (canvasElement: HTMLCanvasElement) => {
  const panel = new Panel(canvasElement)
  global.panel = panel

  return panel
}
