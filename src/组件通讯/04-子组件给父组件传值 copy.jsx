import React from 'react'

// 父组件
export default class Parent extends React.Component {
    state = {
        name: '',
        age: ''
    }
    // 父组件准备回调函数
    getSon = (data) => {
        // 最后在父组件回调函数中定义形参接收数据
        console.log(data);
        this.setState({
            name: data.name,
            age: data.age,
        })
    }
    render() {
        return (
            <div>
                <h4>我是父组件</h4>
                <p>我是子组件传递的名字:{this.state.name}</p>
                <p>我是子组件传递的年龄:{this.state.age}</p>
                {/* 将声明的函数以数据方式传递给子组件 */}
                <Son getData={this.getSon}></Son>
            </div>
        )
    }
}

// 子组件
class Son extends React.Component {
    state = {
        name: 'Tom',
        age: 1
    }
    handle = () => {
        // 在子组件中使用this.props 获取父组件传递的回调函数
        // 并向回调函数中传递数据
        this.props.getData({ name: this.state.name, age: this.state.age })
    }
    render() {
        return (
            <div>
                <h5 onClick={this.handle}>我是子组件</h5>
                <button onClick={this.handle}>获取父组件的props函数</button>
            </div>
        )
    }
}