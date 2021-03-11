import React from 'react'
/**
 * React 组件的更新机制 非常清晰
 *
 * 父组件状态更新以后，父组件本身以及所有的子组件都会重新发生渲染
 *
 * 存在一个问题？
 *
 * 子组件没有状态发生更新，但是子组件重新渲染了， 所有会造成性能损耗比较大
 *
 * 所有需要 做 减少不必要的渲染处理
 *
 * 可以借助更新阶段的钩子函数 shouldComponentUpdate  来实现
 */

export default class App extends React.Component {
    state = {
        count: 1
    }
    click = () => {
        // 给count重新赋值
        // 如果最新的值等于上一次的结果， 就不让 render 方法执行
        this.setState({
            // count: this.state.count + 1
            count: Math.floor(Math.random() * 3)
        })
    }
    // 这个是更新之前的钩子函数，这个钩子函数会在 render 方法执行之前 先执行
    // 接收两个参数
    // 第一个是：最新的props
    // 第二个是：最新的state
    shouldComponentUpdate(nextProps, nextState) {
        // 如果最新的值和上一次一致，不需要render方法执行
        console.log(nextProps);
        console.log(nextState);

        // 这个钩子函数必须有个返回值
        // 如果为 true 代表继续往下执行
        // 如果为 false 代表不往下执行

        // 添加  判断条件来     决定    执行与否
        if (nextState.count === this.state.count) {
            return false
        }
        return true
    }
    render() {
        console.log('我被执行了');
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.click}></button>
            </div>
        )
    }
}