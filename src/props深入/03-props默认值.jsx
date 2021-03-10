import React from 'react'
// 安装导入包
import PropType from 'prop-types'
// 父组件
export default class Parent extends React.Component {
    render() {
        return (
            <div>
                <h4>我是父组件</h4>
                <hr />
                <Son></Son>
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

// 设置默认值
// defaultProps  是React 提供的一个属性节点
Son.defaultProps = {
    name: '2'
}