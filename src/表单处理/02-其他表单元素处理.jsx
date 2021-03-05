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
    changeInput = (e) =>  {
        this.setState({
            val: e.target.value
        })
    }
    contentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    selectChange = (e) => {
        this.setState({
            selectVal: e.target.value
        })
    }
    checkBox = (e) => {
        this.setState({
            isCheck: e.target.checked
        })
    }
    render() {
        return (
            <div>
                <h4>React表单处理</h4>
                <input type="text" value={ this.state.val } onChange={ this.changeInput } />
                
                {/* 富文本输入框 调整为受控组件 */}
                <div className='mt'>
                  <textarea value={ this.state.content } onChange={this.contentChange}  cols="15" rows="10"></textarea>
                </div>

                {/* 下拉框 调整为受控组件 */}
                <div className='mt'>
                    <select value={ this.state.selectVal } onChange={ this.selectChange } >
                        <option value="mk">马克</option>
                        <option value="ys">亚瑟</option>
                        <option value="hy">后裔</option>
                    </select>
                </div>

                {/* 复选框 调整为受控组件 */}
                <div className="mt">
                    <input type="checkbox" checked= { this.state.isCheck } onChange={ this.checkBox} />
                </div>
            </div>
        )
    }
}