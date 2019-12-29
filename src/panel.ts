/* 画板 */

import global from './global'
import Dot from './dot'
import { transformColorObjectToColor } from './utils'
import { Shape } from './constants'


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

  drawReact = (x, y, width, height, color) => {
    this.ctx.beginPath()
    this.ctx.rect(x, y, width, height)
    this.ctx.fillStyle = color
    this.ctx.fill()
    this.ctx.closePath()
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

  drawDot = (dot: Dot) => {
    const { perspective } = global
    const { x, y, color, radius, shape = Shape.ARC } = dot
    let { z } = dot 
    
    if( dot.z < -1 * global.perspective) z = -199

    const computedColor = transformColorObjectToColor(color)
    const scale = Number((perspective / (perspective + z)).toFixed(2))
    const computedX = parseInt(Math.abs(this.width / 2 + (x - this.width / 2) * scale).toString(), 10)
    const computedY = parseInt(Math.abs(this.height / 2 + (y - this.height / 2) * scale).toString(), 10)
    
    try {
      if(shape === Shape.ARC) {
        this.drawBall(computedX, computedY, radius * scale, computedColor)
      }
  
      if(shape === Shape.RECT) {
        this.drawReact(computedX, computedY, radius * scale * 2, radius * scale * 2, computedColor)
      }
    }catch(err){
      console.log(`invalid dot ${JSON.stringify(dot)}`) // eslint-disable-line
    }
  }

  drawDots = (dots: Dot[]) => {
    dots.forEach(dot => this.drawDot(dot))
  }

  clear = () => {
    this.canvas.width = this.width
  }
}

export const createPanel = (canvasElement: HTMLCanvasElement) => {
  const panel = new Panel(canvasElement)
  global.panel = panel

  return panel
}
