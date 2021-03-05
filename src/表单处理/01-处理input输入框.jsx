import React from 'react'

export default class Input extends React.Component{
    /*
    受控组件：表单元素的值交给 state 进行管理和控制
    */
    state = {
        val: ''
    }
    changeInput = (e) =>  {
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h4>React表单处理</h4>
                {/* 将HTML的value值绑定到state，控制state受控组件的数据来源 */}
                {/* 使用onChange获取最新的值赋值给state，监听受控组件的变化 */}
                <input type="text" value={ this.state.val } onChange={ this.changeInput } />
            </div>
        )
    }
}