import React from 'react'

// 组件中声明私有数据需要 state 是一个对象表示一个组件多个数据
export default class Add extends React.Component {
    state = {
        count: 0
    }
    changeState() {
        // 如果将UI结构中的时间处理程序提取成一个方法
        // 就会出现this执行的问题
        // 如何解决？
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>有状态组件</p>
                {/* 如果想使用页面是有数据必须使用this.state访问 */}
                <p>{this.state.count}</p>
                {/* 在react中想修改数据必须使用 this.setState 方法 */}
                {/* 作用：更新state数据，驱动视图(UI)更新 */}
                <button onClick={this.changeState}>修改state数据</button>
            </div>
        )
    }
} 