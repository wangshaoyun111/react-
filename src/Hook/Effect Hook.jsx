import React, { useState, useEffect } from 'react'
// Effect Hook 可以让函数组件执行副作用操作

// 可以把useEffect Hook 看作 componentDidMount ,componentDidUpdate, componentWillUnmount
// 这几个钩子函数的组合
// 副作用：指函数内部与外部的互动，产生运算以外的其他结果
// 副作用主要体现在纯函数中，纯函数是所有函数式编程语言中使用的概念，非常重要的概念
// 纯函数： 一个函数的返回结果只依赖他自己的参数，并在执行过程里面没有副作用
// 纯函数是指相同输入永远会得到相同输出，而且没有任何可观察的副作用，
// 而副作用 会让函数变得不纯，如果函数依赖外部状态无法保证输出相同，就会带来副作用
// 通俗的讲，函数使用外部的数据

// 修改标题
class AppClass extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    addHandleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        document.title = `count的值是${this.state.count}`
    }
    componentDidUpdate() {
        document.title = `count的值是${this.state.count}`
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <p>{count}</p>
                <button onClick={this.addHandleClick}>+++</button>
            </div>
        )
    }
}

function App() {

    const [state, setState] = useState(0)
    const addHandle = () => {
        setState(state + 1)
    }
    // useEffect 在初始化和重新渲染的时候都会触发
    // useEffect 接收一个函数为参数，需要在函数中执行逻辑处理
    useEffect(() => {
        document.title = `count的值是${state}`
    })
    return (
        <div>
            <p>{state}</p>
            <button onClick={addHandle}>+++</button>
        </div>
    )
}
export default App