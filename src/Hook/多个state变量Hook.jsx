import React, { useState } from 'react'


export default function App() {
    const [state, setState] = useState(0)
    const [name, setName] = useState('亚瑟')
    const [arr, setArr] = useState(['Tom', 'Jerry', 'spike', 'tyke'])
    const [obj, setObj] = useState({ name: '儿子' })
    const addHandle = () => {
        setState(state + 1)
    }
    const changeName = () => {
        setName('马可波罗')
    }
    const arrHandle = () => {
        const newArr = ['Tom', '猫', 'spike', 'tyke']
        setArr(newArr)
    }
    const objHandle = () => {
        setObj({ ...obj, name: '爸爸' })
    }
    return (
        <div>
            <p>{state}</p>
            <p>{name}</p>
            <p>{arr[1]}</p>
            <p>{obj.name}</p>
            <button onClick={addHandle}>+++</button><br />
            <button onClick={changeName}>name</button><br />
            <button onClick={arrHandle}>arr</button><br />
            <button onClick={objHandle}>obj</button>
        </div>
    )
}
