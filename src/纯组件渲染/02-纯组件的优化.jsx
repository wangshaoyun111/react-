import React from 'react'

export default class App extends React.PureComponent {
    state = {
        count: 0,
        obj: {
            age: 0
        }
    }

    click = () => {
        // 在这里 我们是吧对象直至赋值给 newObj的
        // 浅层对比：只比对地址 没有发生变化
        // 虽然newObj的 age 发生了改变 但是地址是没有发生改变的，执行的还是 this.state.obj
        // 的地址
        // render 没有调用
        // const newObj = this.state.obj
        // newObj.age = 1
        // 所以在纯组件中 如果想对 state中的 引用类型 进行赋值 需要创建新的地址
        // 然后将新的值赋值给state 中的值，对比发现地址不一样，才会执行render
        const newObj = { ...this.state.obj, age: 1 }

        // 数组和对象一致都需要对 state 赋值时，都需要创建新的地址 产生新的数据，
        // 不能在之前数据上进行修改使用产生新对象的方法  ... contact splice
        this.setState({
            obj: newObj
        })
    }
    render() {
        console.log(1);
        return (
            <div>
                <h4>我是纯组件</h4>
                <p>{this.state.count}</p>
                <button onClick={this.click}></button>
            </div>
        )
    }
}