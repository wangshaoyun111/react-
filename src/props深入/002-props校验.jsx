import React from 'react'
// 安装导入包
import PropType from 'prop-types'
// 父组件
export default class Parent extends React.Component {
    // 创建需要传递数据
    state = {
        name: 'Tom',
        age: 3
    }
    render() {
        return (
            <div>
                <h4>我是父组件</h4>
                <hr />
                <Son name={'1'}></Son>
            </div>
        )
    }
}

// 子组件
function Son(props) {
    return (
        <div>
            <h5>我是子组件</h5>
            <p>{props.name}</p>
        </div>
    )
}
// 给组件中那个属性添加校验规则  组件名称.propTypes  去进行校验
Son.propTypes = {
    // 键是需要校验的props数据，值props接收的数据类型
    name: PropType.string
}