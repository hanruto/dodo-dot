/**
 * 工具方法
 */

import global from './global'
import { ColorObject } from './interfaces'

export function randomNumber(start: number, end: number) {
  const range = end - start
  const number = parseInt((start + Math.random() * range).toString(), 10)
  
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
    const dotsCount = global.dotsCount
    element.innerHTML = `${dotsCount} dots; ${fpsValue} fps`
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

export function transformColorObjectToColor(colorObject: ColorObject) {
  const { r, g, b, a } = colorObject
  const alpha = (a / 255).toFixed(2)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

interface TransformOptions {
  randomColorRange?: { min: number, max: number }
}

export function randomColor(color: ColorObject, randomColorRange?: { min: number, max: number }) {
  let {r, g, b, a} = color
  const { min = 0, max = 0 } = randomColorRange || {}
  const range = max - min

  r += parseInt((Math.random() * range + min).toString(), 10)
  g += parseInt((Math.random() * range + min).toString(), 10)
  b += parseInt((Math.random() * range + min).toString(), 10)

  r < 0 && (r = 0)
  g < 0 && (g = 0)
  b < 0 && (b = 0)
  a < 0 && (a = 0)
  r > 255 && (r = 255)
  g > 255 && (g = 255)
  b > 255 && (b = 255)
  a > 255 && (a = 255)

  return { r, g, b, a }
}

export function transformColorToColorObject(color: string, options?: TransformOptions): ColorObject {
  const hexReg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
  const rgbaReg = /^rgba\((?<r>\d{1,3}), ?(?<g>\d{1,3}), ?(?<b>\d{1,3}), ?(?<a>\d{1,3}) ?\)$/
  const rgbReg = /^rgb\((?<r>\d{1,3}), ?(?<g>\d{1,3}), ?(?<b>\d{1,3}) ?\)$/

  let r = 0
  let g = 0
  let b = 0
  let a = 255

  if(hexReg.test(color)){
    const matched = color.match(hexReg)!
    const hex = matched[1]

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
  }
  
  if(rgbaReg.test(color)) {
    const matched = color.match(rgbaReg)!
    const groups = matched.groups as { r: string, g: string, b: string, a: string}

    r = Number(groups.r)
    g = Number(groups.g)
    b = Number(groups.b)
    a = Number(groups.a)
  }

  if(rgbReg.test(color)){
    const matched = color.match(rgbReg)!
    const groups = matched.groups as { r: string, g: string, b: string}

    r = Number(groups.r)
    g = Number(groups.g)
    b = Number(groups.b)
  } 

  const colorObject = { r, g, b, a }

  if (options && options.randomColorRange) {
    return randomColor(colorObject, options.randomColorRange)
  }

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