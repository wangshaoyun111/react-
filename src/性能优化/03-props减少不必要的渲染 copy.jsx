import React from 'react'


export default class App extends React.Component {
    state = {
        count: 1
    }
    click = () => {
        // 给count重新赋值
        // 如果最新的值等于上一次的结果， 就不让 render 方法执行
        this.setState({
            // count: this.state.count + 1
            count: Math.floor(Math.random() * 3)
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                {/* 组件使用者给组件提供props 如果props不一样才让子组件从新渲染 */}
                {/* 否则 子组件没必要渲染 */}
                <Son count={this.state.count}></Son>
                <button onClick={this.click}>111</button>
            </div>
        )
    }
}

class Son extends React.Component {
    shouldComponentUpdate(nextProps) {
        // 判断最新的props和上一次props是否一致
        // 一致就返回false
        // 不一致返回true

        // this.props.xxx 是上一次props

        console.log(nextProps);
        console.log(this.props.count);
        if (nextProps.count === this.props.count) {
            return false
        }
        return true
    }
    render() {
        console.log('我执行了');
        return (
            <div>
                <h4>我是子组件</h4>
                <p>{this.props.count}</p>
            </div>
        )
    }
}