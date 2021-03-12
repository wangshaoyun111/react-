/**
 * react 核心概念
 *
 * 1、JSX
 *
 * 2、creatElement
 *
 * 3、虚拟DOM对象（React 元素）
 *
 * 4、虚拟DOM 和 DOM 的区别
 *
 * 5、diff 算法对比过程
 */

/**
 * 1、JSX 不是标准的ECMA 拓展语法 浏览器不识别，
 *       想要识别需要使用 babel 这个工具 将JSX 转换成浏览器能识别的语法（实际是转换成creatElement元素）
 *       JSX是 creatElement的语法糖
 *
 * 2、JSX 转换以后 并不能直接渲染，还需要经过react转换
 *       react 将 creatElement 元素 转换成 react元素（虚拟DOM），然后转换成真正的DOM
 *
 * 3、什么是DOM 本质？
 *       DOM 只是浏览器的概念，用js对象描述 页面的结构
 *       通俗来说，就是表示页面上的元素组成
 *       并且，浏览器给提供了相关的API
 *
 * 4、什么是虚拟 DOM
 *       虚拟 DOM 不是真正意义的DOM， 是框架 React（Vue）本身的概念
 *       就是让程序员用 JS 对象去模拟页面的 DOM 和 DOM 的嵌套，
 *       实际上 虚拟DOM 是放在内存上的
 *
 * 5、虚拟 DOM 和 DOM 的区别 ?
 *       虚拟DOM 框架概念：需要程序员手动进行模拟
 *                        本质：就是一个 JS 对象
 *                        目的：就是为了实现页面 快速 高速的更新 和 渲染
 *       DOM: 浏览器提供的核心概念，用 JS 去表示页面的元素
 *
 * 6、Diff 算法对比过程
 *       Diff 算法会经过3曾对比：
 *       1. tree diff
 *       tree diff：实际是新旧两颗 DOM 树之间的对比过程，
 *       当整个 DOM 树逐层对比完成后，需要更改的元素肯定就会被检索到
 *
 *       2.component diff
 *       component diff：就是指在进行 tree diff对比的时候，每一层组件也会进行对比
 *       整个对比 成为 component diff  对比前后查看组件类型是否相同
 *       如果相同：则认定为暂时不需要更新
 *       不同：        则认定整个组件都需要更新，这时候，就会一处该组件，创建新的组件添加到页面
 *
 *       3.element diff
 *       element diff：在进行组件对比的时候（component diff），如果两个组件类型相同
 *       则需要对组件中的元素级别进行对比，查找不同
 *       如果类型不同，则认定整个组件都需要更新
 *       如果相同，不会改变
 */