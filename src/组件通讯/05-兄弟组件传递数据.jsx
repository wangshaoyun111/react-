import React from 'react'
// 兄弟组件传值就是子往父传值，在父往子传值
// 父组件
export default class Parent extends React.Component {
    state = {
        num: null
    }
    // 声明方法
    getSonData = (data) => {
        console.log(data);
        this.setState({
            num: data
        })
    }
    render() {
        return (
            <div>
                <h4>我是父组件</h4>
                <hr />
                <BearBig getData={this.getSonData}></BearBig>
                <hr />
                <BearSmall num={this.state.num}></BearSmall>
            </div>
        )
    }
}

// 第一个子组件
class BearBig extends React.Component {
    state = {
        apple: 5
    }
    handle = () => {
        this.props.getData(this.state.apple)
    }
    render() {
        return (
            <div>
                <h5 onClick={this.handle}>我是熊大</h5>
            </div>
        )
    }
}

// 第二个子组件
class BearSmall extends React.Component {
    render() {
        return (
            <div>
                <h5>我是熊二</h5>
                <p>熊大给的 {this.props.num} 个苹果</p>
            </div>
        )
    }
}