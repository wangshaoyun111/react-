import React from 'react'

// 从React.createContext()导入两个组件
// Provider ----  提供数据
// Consumer ---- 使用数据
const { Provider, Consumer } = React.createContext()
// 兄弟组件传值就是子往父传值，在父往子传值
// 父组件
export default class Parent extends React.Component {
    state = {
        price: 1000
    }
    render() {
        return (
            // 用 Provider 组件将需要传递数据的组件进行包裹
            // 在 Provider 组件上添加 value 属性值代表是传递的数据
            <Provider value={this.state.price}>
                <div>
                    <h4>我是父组件</h4>
                    <Son></Son>
                </div>
            </Provider>
        )
    }
}

// 第一个子组件
class Son extends React.Component {
    render() {
        return (
            <div>
                <h5>我是子组件</h5>
                <Sun></Sun>
            </div>
        )
    }
}

// 第二个子组件
class Sun extends React.Component {
    render() {
        return (
            // 使用 Consumer 组件包裹需要添加数据的组件
            // Consumer 中接收一个函数 作为参数，函数的形参就是 Provider 中value的值
            <Consumer>
                {
                    data => (
                        <div>
                            <h6>我是孙组件</h6>
                            <p>爷爷给了我{data}压岁钱</p>
                        </div>
                    )
                }
            </Consumer>
        )
    }
}