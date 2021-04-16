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
        this.timerId = setInterval(() => {
            console.log('初始化执行的');
        }, 1000)
    }
    componentDidUpdate() {
        document.title = `count的值是${this.state.count}`
    }
    componentWillUnmount() {
        console.log('我在销毁阶段清空定时器');
        clearInterval(this.timerId)
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
class Add extends React.Component {
    state = {
        is: true
    }
    handle = () => {
        this.setState({
            is: !this.state.is
        })
    }
    render() {
        return (
            <div>
                {this.state.is ? <AppClass></AppClass> : ''}
                <button onClick={this.handle}>改变状态</button>
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
        const timerId = setInterval(() => {
            console.log('初始化执行的');
        }, 1000)
        // 在useEffect函数，函数参数内部，还可以返回i一个函数
        // 这个函数就是在组建销毁阶段 componentWillUnmount 执行的
        // 这个返回函数，只会在组件销毁时触发
        return function() {
            console.log('我在销毁阶段清空定时器');
            clearInterval(timerId)
        }
    })
    return (
        <div>
            <p>{state}</p>
            <button onClick={addHandle}>+++</button>
        </div>
    )
}
function Text() {
    const [is, setIs] = useState(true)
    const handle = () => {
        setIs(!is)
    }
    return (
        <div>
            {is ? <App /> : ''}
            <button onClick={handle}>改变状态</button>
        </div>
    )
}
export default Text