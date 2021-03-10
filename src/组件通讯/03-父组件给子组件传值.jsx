import React from 'react'

// 父组件
export default class Parent extends React.Component {
    // 创建需要传递数据
    state = {
        name: 'Tom',
        age: 3
    }
    render() {
        return (
            <div>
                <h4>我是父组件</h4>
                <hr />
                {/* 在子组件标签位置使用属性将数据传递 */}
                <Son name={this.state.name} age={this.state.age}></Son>
            </div>
        )
    }
}

// 子组件
function Son(props) {
    return (
        <div>
            <h5>我是子组件</h5>
            {/* 子组件使用props接收父组件传递数据 */}
            <p>我的名字：{props.name}</p>
            <p>我的年龄：{props.age}</p>
        </div>
    )
}