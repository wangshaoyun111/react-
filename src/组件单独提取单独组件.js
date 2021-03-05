import React from 'react'
// 类组件
// export default class Hello extends React.Component {
//     render() {
//       // render()里面必须有返回值
//       // 如果不进行任何返回值必须返回null
//       return (
//         <div>
//           <h4>我是一个拆分类组件</h4>
//         </div>
//       )
//     }
//   }

// 函数组件
export default function Hello() {
  return (
    <div>
      <h4>我是函数组件</h4>
    </div>
  )
}