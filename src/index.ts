import { createPanel } from './panel'
import {
  createDot,
  createDots,
  createRandomDot,
  createRandomDots,
  createDotsFromText,
  createDotsFromImage,
  paintDots,
} from './dot'
import { createDotsAnimation } from './animation'

const dodot = {
  createPanel,
  createDot,
  createDots,
  createRandomDot,
  createRandomDots,
  createDotsFromText,
  createDotsFromImage,
  createDotsAnimation,
  paintDots,
}

// @ts-ignore
window.dodot = dodot 

export default dodot