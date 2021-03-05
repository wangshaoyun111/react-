import React from 'react'
import './index.css'
export default class Input extends React.Component{
   /**
    * 非受控组件需要借助ref 属性
    * 
    * ref：获取元素 或者组件
    */
    constructor() {
        super()
        this.state = {
            val: ''
        }
        // 1、使用 React.createRef() 创建ref对象
        this.textRef = React.createRef()
    }
    textChange = () => {
        // console.log(this.textRef.current.value)
        // 使用 创建的ref 对象获取到输入框最新的值
        this.setState({
            val: this.textRef.current.value
        })
    }
    
    render() {
        return (
            <div>
                <h4>React表单处理</h4>
                {/* 给input框添加 ref 熟悉，属性值为创建的 ref 对象 */}
                <input name='val' type="text" ref={ this.textRef } onChange={ this.textChange } />
            </div>
        )
    }
}