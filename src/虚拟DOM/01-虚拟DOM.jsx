import React from 'react'

export default class App extends React.PureComponent {
    render() {
        const dom = (
            <div>
                <p>虚拟DOM</p>
            </div>
        )
        console.log(dom);
        return dom
    }
}