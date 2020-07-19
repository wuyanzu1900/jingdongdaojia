import React from 'react'
import server from './server.css'
function Server() {
    return (
        <div className="server">
            <span className="title">功能服务</span>
            <div className="content-top">
                <div className="focus">我的关注</div>
                <div className="comment">我的评价</div>
                <div className="address">我的地址</div>
                <div className="member">商家会员</div>
                <div />
            <div className="content-middle">
                    <div className="plus-member">V+会员</div>
                    <div className="bounty">我的奖励金</div>
                    <div className="sign">签到有惊喜</div>
                    <div className="refund">售后退款</div>
            </div>
            <div className="content-last">
                <div className="service">客服与帮助</div>
            </div>
            </div>

        </div>
    )

}
export default Server