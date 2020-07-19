import React from 'react'
import more from './more.css'

function More() {
    return (
        <div className="more">
            <span className="title">更多推荐</span>
            <div className="more-top">
                <div className="about">
                    <img src={focus} alt="" />
                    <span>关于我们</span>
                </div>
                <div className="register">
                    <img src={comment} alt="" />
                    <span>配送员注册</span>
                </div>
                <div className="merchants">
                    <img src={address} alt="" />
                    <span>商家入驻</span>
                </div>
                <div className="financial">
                    <img src={member} alt="" />
                    <span>金融权益</span>
                </div>
                <div />
            </div>
            <div className="more-bottom">
                <div className="plusmember">
                    <img src={plusmember} alt="" />
                    <span >V+会员</span>
                </div>
                <div className="bonus">
                    <img src={bonus} alt="" />
                    <span >我的奖励金</span>
                </div>
                <div className="sign">
                    <img src={sign} alt="" />
                    <span >签到有惊喜</span>
                </div>
                <div className="refund">
                    <img src={refund} alt="" />
                    <span>售后退款</span>
                </div>
            </div>

        </div>
    )

}
export default More