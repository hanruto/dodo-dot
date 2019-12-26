### 原理

给定一个点可以到另外一个点以特定的函数运动

``` js
const dot = { x: 0, y: 0 }
const newDot = { x: 100, y: 100 }
const animation = createDotAnimation(dot, newDot)
animation.start()
```

同理给定一组点可以到另外一组点以特定的函数运动

``` js
const dot = [{ x: 0, y: 0 }, { x: 0, y: 10 }, { x: 0, y: 20 }]
const newDot = [{ x: 100, y: 100 }, { x: 100, y: 110 }, { x: 100, y: 120 }]
const animation = createDotsAnimation(dot, newDot)
animation.start()
```

dodot 就是控制一些点朝着另外一些点进行变化的一个工具

### Get Start
可以通过以下的API创建点
``` js
createDot
createDots
createRandomDots
createDotsFromText
createDotsFromImage
```

通过下边的方式可以创建一个动画
``` js
const animtion = createDotsAnimation(fromDots, toDots)
```

动画控制
``` js
animation.run()
animation.stop()
animation.continue()
```

### 粒子过渡

粒子的过渡变化使用 Tween.js，可以自行搜索了解。

### 粒子补充

粒子补充指的是当 formDots 和 toDots 的数量不同的时候，需要补充粒子才能进行过渡，主要有两种形式

1. 发散，从尽量大的区域生成点，一般指的 x 介于 -1 * panel.width 和 2 * panel.width，y 坐标介于 -1 * panel.height 和 2 * panel.height 之间  
2. 收敛，从尽量小的区域生成点，一般指的图像所在的区域范围

当toDots和fromDots不存在或者为空数组的时候会采取发散的补充方式  
否则会使用收敛的方式