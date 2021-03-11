import React from 'react'

export default class App extends React.Component {
    state = {
        count: 0
    }
    click = () => {
        this.setState({
            count: this.state.count + 1
        })

        console.log(this.state.count); // 打印的是0 说明setState对state的数据进行异步更新
    }
    render() {
        return (
            <div>
                <h4>setState  是异步的方法</h4>
                <p>{this.state.count}</p>
                <button onClick={this.click}>更改count</button>
            </div>
        )
    }
}