import React from 'react'
import dog from './dog.jpg'
// 高阶组件 HOC  是一个函数，接收要包装的组件，返回增强后的组件
// 高阶组件内部创建一个类组件，在组件中提供复用的状态逻辑代码，
// 通过prop将复用的状态传递给被包装的组件

// 创建高阶组件
// 名字以with开头
// 给函数传递 WrappedComponent 作为参数，参数代表需要加强组件
function withMouse(WrappedComponent) {
    class Mouse extends React.Component {
        // 创建共享数据
        state = {
            x: 0,
            y: 0
        }
        // 操作方法
        handle = (e) => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }

        componentDidMount() {
            window.addEventListener('mousemove', this.handle)
        }

        render() {
            // 高阶组件是将组件进行包装，返回增强的组件
            return <WrappedComponent {...this.state}></WrappedComponent>
        }
    }
    return Mouse
}
function Dog(props) {
    return (
        <img alt=""
            src={dog}
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                position: 'absolute',
                top: props.y - 100,
                left: props.x - 100,
            }}
        />
    )
}
function Position(props) {
    return (
        <div>
            <p>坐标点{props.x}--{props.y}</p>
        </div>
    )
}

const NewMouse = withMouse(Position)
const NewDog = withMouse(Dog)

export default class App extends React.Component {
    render() {
        return (
            <div>
                <NewMouse></NewMouse>
                <NewDog></NewDog>
            </div>
        )
    }
}