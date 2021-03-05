import React from 'react'

export default class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // 使用bind 方法修改 this指向
        // 让函数内部的 this 指向当前组件实例
        // 返回一个内部 this 改变后的实例方法
        // this.changeState = this.changeState.bind(this)
    }

    // changeState()  {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // 使用class类的实例方法
    // 只不过将方法改为了箭头函数
    // 箭头函数内部没有this，指向所在区间，也就是组件实例
    changeState = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>有状态组件</p>
                <p>{this.state.count}</p>
                {/* this 指向组件实例(render方法中的this即为组件实例) */}
                {/* 使用箭头函数解决this指向问题 */}
                {/* 因为箭头函数的this指向他所在的区间 */}
                {/* <button onClick={() => {this.changeState()}}>箭头函数修改state数据</button> */}
                {/* bind方法 */}
                {/* <button onClick={this.changeState}>bind方法修改state数据</button> */}
                {/* class实例方法 */}
                <button onClick={this.changeState}>bind方法修改state数据</button>
            </div>
        )
    }
} 