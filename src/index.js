// 导入核心包
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
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
const box = (
  <div>
    <p style={{color:'red',width:'100px',height:'100px',backgroundColor:'skyblue'}}>Tom</p>
    {/* 推荐使用className方式 */}
    <p className="box">Jerry</p>
  </div>
)
// 挂在到页面
ReactDOM.render(box, document.getElementById('root'))