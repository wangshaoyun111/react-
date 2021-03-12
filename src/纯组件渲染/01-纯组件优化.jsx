import React from 'react'

export default class App extends React.PureComponent {
    state = {
        count: 0
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
        console.log(1);
        return (
            <div>
                <h4>我是纯组件</h4>
                <p>{this.state.count}</p>
                <button onClick={this.click}></button>
            </div>
        )
    }
}