import React from 'react'

// export default function Handle(props) {
//     return (
//         <div>
//             <h4>函数组件</h4>
//             {props.children}
//         </div>
//     )
// }

export default class Handle extends React.Component {
    render() {
        return (
            <div>
                <h4>函数组件</h4>
                {this.props.children}
            </div>
        )
    }
}