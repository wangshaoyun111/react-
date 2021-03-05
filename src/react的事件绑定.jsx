import React from 'react'

export default class Hello extends React.Component {
    // 在react 事件中event不诚为事件对象而是合成对象
    // 所谓合成事件兼容所有浏览器，不用担心兼容问题
    click(event) {
        console.log('React，绑定的事件')
        console.log(event)
    }
    render() {
        return (
            <div>
                {/* 事件是驼峰写法 */}
                {/* 事件处理程序不需要加引号。放到大括号中即可 */}
                <button onClick={this.click}>触发事件</button>
            </div>
        )
    }
}