/**
 * 工具方法
 */

import global from './global'
import { ColorObject } from 'interfaces'

export function randomNumber(start: number, end: number) {
  const i = end - start
  const number = parseInt((start + Math.random() * i).toString(), 10)
  return number
}

export function showFps() {
  let frameCount = 0

  const element = document.createElement('span')
  element.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
  `
  document.body.appendChild(element)
  const loop = () => {
    frameCount++
    requestAnimationFrame(loop)
  }

  loop()

  const calcInterval = 2000

  setInterval(function () {
    const fpsValue = (1000 / (calcInterval / frameCount)).toFixed(1)
    element.innerHTML = `${fpsValue} fps`
    frameCount = 0
  }, calcInterval)
}

export function shuffle<T extends any>(arr: Array<T>): Array<T> {
  const newArr: Array<T> = arr.map(item => item)
  const len = newArr.length

  newArr.forEach((item, index) => {
    const randomIndex = parseInt((Math.random() * len).toString(), 10)
    newArr[index] = newArr[randomIndex]
    newArr[randomIndex] = item
  })

  return newArr
}

export function transformColorObjectToColor(colorObject) {
  const { r, g, b, a } = colorObject
  const alpha = (a / 255).toFixed(2)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function transformColorToColorObject(color: string): ColorObject {
  const r = 0
  const g = 0
  const b = 0
  const a = 0

  return { r, g, b, a }
}

export const withStashPanelData = (fn: Function) => {
  const panel = global.panel!
  const offsetCanvas = document.createElement('canvas')
  const offsetCtx = offsetCanvas.getContext('2d')!
  const sourceCanvas = panel.canvas
  offsetCanvas.width = sourceCanvas.width
  offsetCanvas.height = sourceCanvas.height
  offsetCtx.drawImage(panel.canvas, 0, 0)

  const result = fn()

  panel.ctx.drawImage(offsetCanvas, 0, 0)

  return result
}

export const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))