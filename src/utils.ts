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
  const hexReg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
  const rgbaReg = /^rgba\((?<r>\d{1,3}), ?(?<g>\d{1,3}), ?(?<b>\d{1,3}), ?(?<a>\d{1,3}) ?\)$/
  const rgbReg = /^rgb\((?<r>\d{1,3}), ?(?<g>\d{1,3}), ?(?<b>\d{1,3}) ?\)$/
  if(hexReg.test(color)){
    const matched = color.match(hexReg)!
    const hex = matched[1]

    let r, g, b

    if(hex.length === 3) {
      r = Number('0x' + hex[0]) * 15
      g = Number('0x' + hex[1]) * 15
      b = Number('0x' + hex[2]) * 15
    }
    
    if(hex.length === 6) {
      r = Number('0x' + hex.slice(0, 2))
      g = Number('0x' + hex.slice(2, 4))
      b = Number('0x' + hex.slice(4, 6))
    }

    return {r, g, b, a: 255} 
  }
  
  if(rgbaReg.test(color)) {
    const matched = color.match(rgbaReg)!
    const { r, g, b, a } = matched.groups as { r: string, g: string, b: string, a: string}
    return {r: Number(r), g: Number(g), b: Number(b), a: Number(a)}
  }

  if(rgbReg.test(color)){
    const matched = color.match(rgbReg)!
    const { r, g, b } = matched.groups as { r: string, g: string, b: string}
    return {r: Number(r), g: Number(g), b: Number(b), a: 255}
  } 

  throw new Error('Invalid color')
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