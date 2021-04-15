import React, { useState } from 'react'


// 用类来使用


// class AppClass extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     addHandleClick = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         const { count } = this.state
//         return (
//             <div>
//                 <p>{count}</p>
//                 <button onClick={this.addHandleClick}>+++</button>
//             </div>
//         )
//     }
// }
// Hook 基本使用
// Hook是一个函数，在react中导入 useState方法

// 只能在函数组件中使用
export default function App() {
    // 初始化数据和更改数据的方法

    // 在调用useState 方法的时候 ，就可以传递参数
    // useState 返回两个参数
    // 第一个参数 是 state 初始化的数据 
    // 第二个参数 是 setState 更改数据的方法
    const [state, setState] = useState(0)
    const addHandle = () => {
        // 无需使用this.setState方法更改
        // 直接使用 Hook 的方法
        setState(state + 1)
    }
    return (
        <div>
            <p>{state}</p>
            <button onClick={addHandle}>+++</button>
        </div>
    )
}
