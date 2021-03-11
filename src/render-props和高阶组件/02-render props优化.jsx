import React from 'react'
import dog from './dog.jpg'
/**
 * render props 是一种 复用的技术 使用一个值为函数的props 在React 组件之间实现代码
 * 
 * 必须将共享数据和共享数据方法提取成一个组件
 * 
 * 组件：提供共享数据、提供共享数据的方法
 * 
 * UI 结构 是组件使用者提供的
 */
class Mouse extends React.Component {
    // 共享的数据
    state = {
        x: 0,
        y: 0
    }

    handle = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handle)
    }

    render() {
        // 在将组件封装完毕，需要给这个组件返回值
        // 返回值为一个函数，这个属性为props
        return this.props.children(this.state)
    }
}

export default class App extends React.Component {

    render() {
        return (
            <div>
                {/* 使用组件的时候，有UI结构需要根据数据进行渲染出来 */}
                {/* 给组件使用者，添加一个props ，这个props的值是一个函数 */}
                {/* 在函数渲染需要加载的结构 */}
                {/* <Mouse render={(mouse) => {
                    return <p>{mouse.x}, {mouse.y}</p>
                }}></Mouse> */}

                <Mouse>
                    {
                        (mouse) => {
                            return (
                                <div>
                                    <p>{mouse.x}, {mouse.y}</p>
                                    {this.props.children}
                                </div>
                            )
                        }
                    }
                </Mouse>
                <Mouse>
                    {
                        (mouse) => {
                            return (
                                <img alt=""
                                    src={dog}
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: mouse.y - 100,
                                        left: mouse.x - 100,
                                    }}
                                />
                            )
                        }
                    }
                </Mouse>
                {/* <Mouse render={(mouse) => {
                    return (
                        <img alt=""
                            src={dog}
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: mouse.y - 100,
                                left: mouse.x - 100,
                            }}
                        />
                    )
                }}></Mouse> */}
            </div>
        )
    }
}