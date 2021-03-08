import React from 'react'

// 函数组件
// 在函数组件中如果接受外部传递数据
// 需要添加形参props 在组建内部使用props.xxx 的方式接收数据
// export default function Handle(props) {
//     return (
//         <div>
//             <h4>我是函数组件</h4>
//             <p>我是外部传递数据：{props.name} </p>
//         </div>
//     )
// }

// ---------------------------------------------

// 类组件

// 在类组件中 如果需要接收 传递数据
// 类组件内部直接使用 this.props.xxx获取传递数据
export default class Handle extends React.Component {
    render() {
        return (
            <div>
                <h4>我是类组件</h4>
                <p>我是外部传递数据：{this.props.name} </p>
            </div>
        )
    }
}