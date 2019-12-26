/**
 * 保存一些环境变量和全局公用数据
 */
import Panel from './panel'

const DEFAULT_PERSPECTIVE = 200

interface Global {
  perspective: number,
  panel: Panel | null
}

const global: Global = {
  perspective: DEFAULT_PERSPECTIVE,
  panel: null
}

export default global