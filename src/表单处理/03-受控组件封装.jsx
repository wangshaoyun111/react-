import React from 'react'
import './index.css'
export default class Input extends React.Component{
   /**
    * 文本框(input)
    * 下拉框(select)
    * 富文本(textarea)
    * 复选框(checkbox)
    */
    state = {
        val: '',
        content: '',
        selectVal: '',
        isCheck: false
    }
    handle = (e) => {
        const target = e.target
        // 使用e.target 获取元素类型，根据类型获取表单值
        const value = target.type === 'checkbox' ? target.checked : target.value
        // 使用target.name获取表单名称 和state的数据是一样的
        const name = target.name
        console.log([name]);
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h4>React表单处理</h4>

                {/* 输入框 调整为受控组件 */}
                <input name='val' type="text" value={ this.state.val } onChange={ this.handle } />
                
                {/* 富文本输入框 调整为受控组件 */}
                <div className='mt'>
                  <textarea name='content' value={ this.state.content } onChange={this.handle}  cols="15" rows="10"></textarea>
                </div>

                {/* 下拉框 调整为受控组件 */}
                <div className='mt'>
                    <select name='selectVal' value={ this.state.selectVal } onChange={ this.handle } >
                        <option value="mk">马克</option>
                        <option value="ys">亚瑟</option>
                        <option value="hy">后裔</option>
                    </select>
                </div>

                {/* 复选框 调整为受控组件 */}
                <div className="mt">
                    <input name='isCheck' type="checkbox" checked= { this.state.isCheck } onChange={ this.handle} />
                </div>
            </div>
        )
    }
}