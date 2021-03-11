import React from 'react'

// 更新阶段  
// props 或者 state 发生改变时

export default class Handle extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '亚瑟'
        }
    }

    // componentDidUpdate是在 state 或者 props 发生改变时触发
    // 数据发生改变，页面也会发生改变 
    // 数据发生改变 ，新的数据和页面结合 生产DOM  将最新的dom 插入到dom 结构以后触发
    // 在这个阶段 经常做的处理
    // 1 执行dom 操作
    // 2 发起axios 请求
    componentDidUpdate() {
        console.log('我是更新时触发2');
    }
    handle = () => {
        this.setState({
            name: '马克'
        })
    }
    render() {
        console.log('我是更新时触发的1');
        return (
            <div>
                <h4 id='box'>我是创建阶段钩子函数</h4>
                <button onClick={this.handle}></button>
            </div>
        )
    }
}