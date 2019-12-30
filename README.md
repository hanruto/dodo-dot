dodo-dot是一个快速创建粒子动画的工具，可以非常简单的创建炫酷好玩的粒子动画效果。

demo: https://hanruto.github.io/dodo-dot/examples/3.html

# Installation

``` sh
$ yarn add dodo-dot
```

# Get Start

### STEP1  

在创建点和动画之前需要先制定一个canvas元素，这个panel是后边创建dot和animation所必须的

``` js
import dodot from 'dodo-dot'

const panel = dodot.createPanel(canvas)
```

### STEP 2  

通过下边的API创建一组点

``` js
const dotsInfo = [
  { x: 10, y: 10, z: 0, color: '#666', shape: 'arc' },
  { x: 30, y: 10, z: 0, color: '#333', shape: 'arc' },
  { x: 50, y: 10, z: 0, color: '#999', shape: 'arc' },
]
const dots = createDots([ dotInfo, dotInfo, dotInfo ])
```

下边的这些方式创建dot会非常方便

``` js
// 随机创建1000个dot
const randomDots = createRandomDots(1000) 

// 创建排列成文字形状的dot
const textDots = createDotsFromText('Hello World')

// 创建排列成图片形状的dot
const imageDots = createDotsFromImage(image)
```

### STEP 3

通过下边的方式可以创建一个动画

``` js
const animtion = createDotsAnimation(fromDots, toDots)

```

创建连续的动画可以通过

``` js
const animtion = createMutiSegmentDotsAnimation([ dotsArr ])
```

### STEP 4

动画执行和控制

``` js
animation.run()
animation.stop()
animation.continue()
```

# API
### 常用的接口主要有  

createPanel(canvasElement)

createDots(dotsInfo)
createRandomDots(dotsCount, [createDotsOptions])
createDotsFromText(text, [createDotsOptions])
createDotsFromImage(image, [createDotsOptions])

createDotsAnimation(fromDots, toDots, [createAnimationOptions])
createMutiSegmentAnimation(dotsArr, [createAnimationOptions])

animation.run()
animation.stop()
animation.continue()

### 参数

#### createDotsOptions
- color 粒子颜色，默认值 #666
- radius 粒子半径，默认值5
- randomColorRange 颜色随机偏移，默认值 { min: 0, max: 0 }
- shape 形状，默认值 arc, 支持 rect 和 arc，颜色随机偏移配合rect形状可以产生马赛克效果

创建随机粒子额外的参数
- xRange 随机x的范围，默认值 { min: -panel.width, max: 2 * panel.width }
- xRange 随机x的范围，默认值 { min: -panel.width, max: 2 * panel.width }
- xRange 随机x的范围，默认值 { min: -panel.width, max: 2 * panel.width }

创建文字粒子额外的参数
- translateX x偏移，默认值 0
- translateY y偏移，默认值 0
- margin 粒子间距，默认值 0
- fontSize 文字大小，默认值 150

创建图片粒子额外的参数
- translateX x偏移，默认值 0
- translateY y偏移，默认值 0
- margin 粒子间距，默认值 0
- imageWidth 图片宽度，默认值 image.height
- imageHeight 图片高度，默认值 image.width

#### createAnimationOptions

- delay 动画延迟时间，默认值 0
- totalFrame 动画总帧数，默认值 60
- tweenType 粒子过渡方式，默认值 Sine

  粒子的过渡变化使用 tween.js，可以自行搜索了解。  
  过度的动画类型有  
  - Quad
  - Cubic
  - Quart
  - Quint
  - Sine
  - Expo
  - Circ
  - Elastic
  - Back
  - Bounce

- supplementType 粒子补充方式，默认值 convergence

  粒子补充指的是当 formDots 和 toDots 的数量不同的时候，需要补充粒子才能进行过渡，主要有三种形式
  
  - convergence，从尽量小的区域生成点，一般指的图像所在的区域范围  
  - divergence，从尽量大的区域生成点，一般指的3倍的屏幕尺寸的大小范围  
  - clone，从源点数组中随机抽取点进行拷贝
