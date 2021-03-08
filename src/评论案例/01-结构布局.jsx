import React from  'react'
import './index.css'
class Comment extends React.Component {
    render() {
        return (
            <div className="common">
                {/* 评论输入框 */}
                <div>
                    <input type="text" placeholder='请输评论人' />
                    <div>
                      <textarea className='content' name="userComment" cols="30" rows="10" placeholder='请输入评论内容'></textarea>
                    </div>
                    <button>发表评论</button>
                </div>
                {/* 评论列表 */}
                <ul>
                    <li>
                        <h4>评论人：马克</h4>
                        <p>评论内容：转圈圈</p>
                    </li>
                </ul>
            </div>
        ) 
    }
}

export default Comment