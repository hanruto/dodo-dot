/**
 * 通用接口类型
 */

export interface ColorObject {
  r: number
  g: number
  b: number
  a: number
}

export interface DotInfo {
  x: number
  y: number
  z: number
  color: string | ColorObject
  radius?: number
  shape?: string
  randomColorRange?: { min: number, max: number }
}
