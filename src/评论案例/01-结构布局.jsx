import React from  'react'
import './index.css'
class Comment extends React.Component {
    state = {
        commentList: [],
        user: '',
        userComment: ''
    }
    // 渲染结构方法
    renderList() {
        const { commentList } = this.state
        if (commentList.length === 0) {
            return (
                <div className='no'>没有评论快去添加吧~~~</div>
            )
        }
        return (
            <ul>
                {
                    commentList.map(item => (
                        <li key={item.id}>
                            <h4>评论人：{ item.name }</h4>
                            <p>评论内容：{ item.comment }</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
    handle = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    publish = () => {
        const { commentList, user, userComment } = this.state
        if (user.trim() === '') {
            alert('请输入用户名')
            return
        }
        if (userComment.trim() === '') {
            alert('请输入内容')
            return
        }
        const newComment = [
            {
                id: Math.random(),
                name: user,
                comment: userComment
            },
            ...commentList
        ]
        this.setState({
            commentList: newComment,
            user: '',
            userComment: ''
        })
    }
    render() {
        return (
            <div className="common">
                {/* 评论输入框 */}
                <div>
                    <input name='user' value={this.state.user} onChange={this.handle} type="text" placeholder='请输评论人' />
                    <div>
                        <textarea
                            className='content'
                            onChange={this.handle}
                            value={this.state.userComment}
                            name="userComment"
                            cols="30" rows="10"
                            placeholder='请输入评论内容'>
                        </textarea>
                    </div>
                    <button onClick={ this.publish }>发表评论</button>
                </div>
                {/* 评论列表 */}
                { this.renderList() }
            </div>
        ) 
    }
}

export default Comment