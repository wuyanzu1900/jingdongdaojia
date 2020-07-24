import React from 'react'
import { Link } from 'react-router-dom'
import server from './server.css'
import focus from '../../../images/focus.png'
import comment from '../../../images/comment.png'
import address from '../../../images/address.png'
import member from '../../../images/member.png'
import plusmember from '../../../images/plusmember.png'
import bonus from '../../../images/bonus.png'
import sign from '../../../images/sign.png'
import refund from '../../../images/refund.png'
import help from '../../../images/help.png'
function Server() {
    return (
        <div className="server">
            <span className="title">功能服务</span>
            <div className="content-top">
                <Link to="/serverfocus">
                    <div className="focus">
                        <img src={focus} alt="" />
                        <span>我的关注</span>

                    </div>
                </Link>

                <div className="comment">
                    <img src={comment} alt="" />
                    <span>我的评价</span>
                </div>
                <div className="server-address">
                    <img src={address} alt="" />
                    <span>我的地址</span>
                </div>
                <div className="member">
                    <span className="dot1"></span>
                    <img src={member} alt="" />
                    <span>商家会员</span>
                </div>
                <div />
            </div>
            <div className="content-middle">
                <div className="plusmember">
                    <span className="dot2"></span>
                    <img src={plusmember} alt="" />
                    <span >V+  会员</span>
                </div>
                <div className="bonus">
                    <span className="dot3"></span>
                    <img src={bonus} alt="" />
                    <span >我的奖励金</span>
                </div>
                <div className="sign">
                    <span className="dot4"></span>
                    <img src={sign} alt="" />
                    <span >签到有惊喜</span>
                </div>
                <div className="refund">
                    <img src={refund} alt="" />
                    <span>售后退款</span>
                </div>
            </div>
            <div className="content-last">
                <div className="help">
                    <span className="dot5"></span>
                    <img src={help} alt="" />
                    <span>客服与帮助</span>
                </div>
            </div>
        </div>
    )

}
export default Server