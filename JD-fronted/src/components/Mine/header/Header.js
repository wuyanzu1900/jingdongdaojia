import React from 'react';
import './header.css'
import message from '../../../images/message.png';
import greater from '../../../images/greater.png'
import line from '../../../images/line.png'
import wallet from '../../../images/wallet.png'

function Header() {
    return (
        <div className="header">
            <img src="//static-o2o.360buyimg.com/daojia/react/images/user_center_headbg.02208e0b.png"
                alt="" draggable="false" className="header-bg" />
            <div className="login-Head-portrait">
                <div className="login-box-border">
                    <img src="//static-o2o.360buyimg.com/daojia/react/images/bg_head_new.a0eebf19.png"
                        alt="" draggable="false" className="Head-portrait" />
                </div>
                <div className="login-text">
                    登录/注册
                </div>
                <div className="arrow">
                    <img src={greater} alt="" />
                </div>
            </div>
            <div className="message">
                <img src={message} alt="" />
            </div>
            <div className="wallet">
                <div className="mywallet">
                    <img src={wallet} alt="" />
                    我的钱包</div>
                <div className="line">
                    <img src={line} alt="" />
                </div>
                <div className="kinds">
                    <div className="red-packet">
                        <span className="null1">-</span>
                        <span className="hongbao">红包</span>
                    </div>
                    <div className="Mine-discount">
                        <span className="null2">-</span>
                        <span className="youhuiquan">优惠券</span>
                    </div>
                    <div className="bean">
                        <span className="null3">-</span>
                        <span className="xiandou">鲜豆</span>
                    </div>
                    <div className="white-bar">
                        <span className="null4">-</span>
                        <span className="baitiao">白条</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Header