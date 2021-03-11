// 导入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Handle from './render-props和高阶组件/04-高阶组件设置displayname'
// 使用JSX创建react元素
// const h4 = <h4>Tom</h4>
// const isLoading = true

// react 进行条件判断
// 在react使用if/else
// const loading =  () =>  {
//   if (isLoading) {
//     return <p>数据正在加载中...</p>
//   }
//   return <p>数据加载完成</p>
// }

// 使用三元运算符

// const loading = () => {
//   return isLoading ? <p>数据正在加载中...</p> : <p>数据加载完成</p>
// }

// 使用逻辑运算符 使用不是很多
// const loading = () => {
//   return isLoading && <p>数据正在加载中...</p>
// }
// const h4 = (
//   <div>
//     { loading() }
//   </div>
// )


// JSX进行数据渲染，官方推荐map方法
// const hero = [
//   { id:1,name:'马可波罗'},
//   { id:2,name:'澜'},
//   { id:3,name:'后裔'}
// ]
// const ul = (
//   <ul>
//     {
//       // key直接写 不需要加引号
//       hero.map(item => <li key={item.id}> { item.name }</li>)
//     }
//   </ul>
// )

// 行内样式 className类
// const box = (
//   <div>
//     <p style={{color:'red',width:'100px',height:'100px',backgroundColor:'skyBlue'}}>Tom</p>
//     {/* 推荐使用className方式 */}
//     <p className="box">Jerry</p>
//   </div>
// )

// 函数式组件创建
// 1.首字母大写
// 2.内部必须有返回值,返回内容就是组件页面结构
// function Hello() {
//   return (
//     <div>
//       <h4>我是内容</h4>
//     </div>
//   )
// }
// 把函数式组件的名称当作组件标签使用即可
// 组件标签可以是单标签也可以是双标签
// 如果不进行任何返回值必须返回null
// ReactDOM.render(<Hello/>, document.getElementById('root'))


// 使用类创建组件使用ES6的class创建
// 1.类名称首字母也是大写
// 2.类组件需要继承 extends React.Component
// 3.类的内部必须有个render()方法
// 4.render()里面必须有返回值
// class Hello extends React.Component {
//   render() {
//     // render()里面必须有返回值
//     // 如果不进行任何返回值必须返回null
//     return (
//       <div>
//         <h4>我是一个类组件</h4>
//       </div>
//     )
//   }
// }

const jsxHtml = (
    <span>我是组件标签的子内容,来自 jsx</span>
)
const handleHtml = (
    <Handle>
        <p>我是组件标签的子内容</p>
        <p>我是组件标签的子内容</p>
        <p>我是组件标签的子内容</p>
        {jsxHtml}
    </Handle>
)
// 挂在到页面
ReactDOM.render(handleHtml, document.getElementById('root'))