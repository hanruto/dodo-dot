import global from './global'

export default class Panel {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number

  constructor(element: HTMLCanvasElement){
    this.canvas = element
    this.ctx = this.canvas.getContext('2d')!
    this.width = element.width
    this.height = element.height
  }

  drawBall = (x: number, y: number, radius: number, color: string)  => {
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
}

export const createPanel = (canvasElement: HTMLCanvasElement) => {
  const panel = new Panel(canvasElement)
  global.panel = panel

  return panel
}
