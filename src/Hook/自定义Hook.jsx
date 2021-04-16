import { useState, useEffect } from 'react'
import gyy from './高圆圆.jpg'
// 自定义Hook 主要实现组件之间状态逻辑的复用
// 自定义Hook 是一个函数 函数名必须以 use 开头

function useMouse() {
    // 1.初始化坐标点
    const [point, setPoint] = useState({ x: 0, y: 0 })
    // 3.获取到最新坐标点 对初始值进行赋值
    const handle = (e) => {
        const newPoint = {
            x: e.clientX,
            y: e.clientY
        }
        setPoint(newPoint)
    }
    // 2.监听鼠标移动事件，通过事件获取鼠标坐标点
    useEffect(() => {
        window.addEventListener('mousemove', handle)
        return function() {
            window.removeEventListener('mousemove', handle)
        }
    })
    // 最后，需要将最新的坐标点返回给函数调用者
    return point
}
// 创建鼠标组件
function Mouse() {
    const mouse = useMouse()
    return (
        <div>
            <p>{mouse.x} --- {mouse.y} </p>
        </div>
    )
    // console.log(mouse);
    // // 函数组件必须有返回值 如果不返回UI结构，需要返回null
    // return null
}

// 创建跟随鼠标移动图片组件
function Img() {
    const mouse = useMouse()
    return (
        <div>
            <img
                src={gyy}
                style={{
                    width: '300px',
                    height: '561px',
                    position: 'absolute',
                    top: mouse.y - 250,
                    left: mouse.x - 150,
                }}
                alt="" />
        </div>
    )
}
function App() {
    return (
        <div>
            <Mouse></Mouse>
            <Img></Img>
        </div>
    )
}
export default App