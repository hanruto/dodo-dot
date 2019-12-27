import { createPanel } from './panel'
import {
  createDot,
  createDots,
  createRandomDot,
  createRandomDots,
  createDotsFromText,
  createDotsFromImage,
} from './dot'
import { 
  createDotsAnimation,
  createMutiSegmentDotsAnimation,
} from './animation'
import * as utils from './utils'

const dodot = {
  createPanel,
  createDot,
  createDots,
  createRandomDot,
  createRandomDots,
  createDotsFromText,
  createDotsFromImage,
  createDotsAnimation,
  createMutiSegmentDotsAnimation,
  utils,
}

// @ts-ignore
window.dodot = dodot

export default dodot
