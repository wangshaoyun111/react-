import React from 'react'

// 卸载阶段  
// 组件从DOM 结构中移除就会进入卸载阶段
// 只会触发一个钩子函数

export default class Handle extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '亚瑟',
            num: 3
        }
    }

    // 一个组件再卸载销毁之前触发
    // 主要做清理工作  比如清理定时器
    componentWillUnmount() {

    }

    handle = () => {
        this.setState({
            num: this.state.num - 1
        })
    }
    render() {
        console.log('我是更新时触发的1');
        return (
            <div>
                <h4 id='box'>我是卸载阶段钩子函数</h4>
                {this.state.num}
                <hr />
                {this.state.num >= 0 ? <Son /> : ''}
                <button onClick={this.handle}>销毁子组件</button>
            </div>
        )
    }
}

class Son extends React.Component {
    componentWillUnmount() {
        console.log('我被销毁了');
    }

    render() {
        return (
            <h5>我是子组件</h5>
        )
    }
}