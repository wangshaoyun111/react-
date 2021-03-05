import React from 'react'

// 组件中声明私有数据需要 state 是一个对象表示一个组件多个数据
export default class Add extends React.Component {
    // 复杂写法
    // constructor() {
    //     super()
    //     // this.state 中声明需要使用私有数据
    //     this.state = {
    //         count: 0
    //     }
    // }
    // 简化写法
    state = {
        count: 18
    }
    render() {
        return (
            <div>
                <p>有状态组件</p>
                {/* 如果想使用页面是有数据必须使用this.state访问 */}
                <p>{ this.state.count }</p>
            </div>
        )
    }
} 