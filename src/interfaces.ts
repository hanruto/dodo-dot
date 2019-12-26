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
  radius: number
  color: string | ColorObject
}
