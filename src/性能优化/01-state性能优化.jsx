import React from 'react'

export default class App extends React.Component {
    state = {
        name: '马克'
    }

    componentDidMount() {
        // 一般情况下，如果一个数据，不需要被渲染到 UI 结构中， 或者这个数据需要多个方法中使用
        // 可以将这个数据 直接挂载到 this 上即可
        this.timerId = setInterval(() => {
            console.log('定时器');
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}