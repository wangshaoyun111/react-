import React from 'react'

// 创建阶段 指 组件从实例化创建成功， 到插入到Dom 结构中的过程
export default class Handle extends React.Component {
    // 构造函数  初始化state数据  为事件绑定this
    constructor() {
        super()
        this.state = {}
        console.dir(1);
    }
    // 钩子函数
    //  组件完全渲染到浏览器以后才会触发
    // 数据+模板 结合以后 生成DOM元素，将DOM元素完全插入到DOM结构中以后触发
    // 1 执行dom 操作
    // 2 发起axios 请求
    componentDidMount() {
        console.dir(3);
        const box = document.getElementById('box')
        console.log(box);
    }
    // render方法  渲染ui'结构的， 所以每次组件发生渲染都会执行render
    // 注意：不能在里面调用  setState
    render() {
        console.dir(2);
        return (
            <div>
                <h4 id='box'>我是创建阶段钩子函数</h4>
            </div>
        )
    }
}