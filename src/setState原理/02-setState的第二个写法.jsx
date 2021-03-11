import React from 'react'

export default class App extends React.Component {
    state = {
        count: 0
    }
    // click = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })

    //     console.log(this.state.count); // 打印的是0 说明setState对state的数据进行异步更新
    // }

    click = () => {
        // setState 第二个写法是回调函数，接收两个回调函数
        // state  表示最新的值
        // props表示最新的props


        // this.setState((state, props) => {
        //     return {
        //         count: state.count + 1
        //     }
        // }, () => {
        //     // 更新数据之后立马执行第二个函数
        //     console.log(state.count);
        // })


        // 第二种写法的state是this.state的映射，操作的不是原来的数据
        // 使用这种方法可以实现累积
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        })
        // 虽然能够实现累加 但是依然是异步的，第二个函数state  依赖的数据不再是 this.state的数据
        //  而是依赖 第一个setState 中返回的结果
        this.setState((state, props) => {
            return {
                count: state.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h4>setState  是异步的方法</h4>
                <p>{this.state.count}</p>
                <button onClick={this.click}>更改count</button>
            </div>
        )
    }
}