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
    // 在类组件中想在构造函数 使用props
    // 必须将 props 传递给 super方法 否则无法使用
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div>
                {/* props可以接收任意类型数据 */}
                <h4>我是类组件</h4>
                <p>我是string：{this.props.name} </p>
                <p>我是number：{this.props.age} </p>
                <p>我是boolean：{this.props.bol +1} </p>
                <p>我是array：{this.props.arr} </p>
                <p>我是jsx：{this.props.jsxHtml} </p>

                {/* props是只读的不能修改 */}
                {/* <button onClick={() => {
                    this.props.name='1'
                }}>修改 props</button> */}
            </div>
        )
    }
}