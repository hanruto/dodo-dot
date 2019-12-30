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
const randomDots = createRandomDots(1000, {
  color: '#39f', // default: 'rgba(255, 255, 255, 0)
  radius: 5, // default: 5
  margin: 0, // default: 0
  translateX: 0, // default: 0
  translateY: 0, // default: 0
  randomColorRange: { min: 0, max: 0}, // default: { min: 0, max: 0 }
}) 

// 创建排列成文字形状的dot
const textDots = createDotsFromText('Hello World', {
  fontSize: 200, // default: #150
  color: '#39f', // default: #666
  radius: 5, // default: 5
  margin: 0, // default: 0
  translateX: 0, // default: 0
  translateY: 0, // default: 0
  randomColorRange: { min: 0, max: 0}, // default: { min: 0, max: 0 }
})

// 创建排列成图片形状的dot
const imageDots = createDotsFromImage(image, {
  imageWidth: 300, // default: image.height
  imageHeight: 300, // default: image.width
  radius: 5, // default: 5
  margin: 0, // default: 0
  translateX: 0, // default: 0
  translateY: 0, // default: 0
  randomColorRange: { min: 0, max: 0}, // default: { min: 0, max: 0 }
})
```

### STEP 3

通过下边的方式可以创建一个动画

``` js
const animtion = createDotsAnimation(fromDots, toDots, {
  tweenType: 'Bounce', // default: Sine
  totalFrame: 60, // default: 60
  supplementType: 'clone', // default: convergence
  delay: 0, // default: 0
})

```

创建连续的动画可以通过

``` js
const animtion = createMutiSegmentDotsAnimation([ dotsArr ], {
  delay: 0, // default: 0
  totalFrame: 60, // default: 60
  tweenType: 'Bounce', // default: Sine 参考后边的补充说明
  supplementType: 'clone', // default: convergence 参考后边的补充说明
  
})
```

### STEP 4

动画执行和控制

``` js
animation.run()
animation.stop()
animation.continue()
```

# 补充说明

### 粒子过渡 tweenType

粒子的过渡变化使用 Tween.js，可以自行搜索了解。
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

### 粒子补充 supplementType

粒子补充指的是当 formDots 和 toDots 的数量不同的时候，需要补充粒子才能进行过渡，主要有三种形式

- 发散（divergence），从尽量大的区域生成点，一般指的3倍的屏幕尺寸的大小范围  
- 收敛（convergence），从尽量小的区域生成点，一般指的图像所在的区域范围  
- 拷贝（clone），从源点数组中随机抽取点进行拷贝
