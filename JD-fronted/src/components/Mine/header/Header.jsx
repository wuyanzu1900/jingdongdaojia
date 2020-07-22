import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'
import message from '../../../images/message.png';
import greater from '../../../images/greater.png'
import line from '../../../images/line.png'
import wallet from '../../../images/wallet.png'
import headPic from '../../../images/headPic.jpg'
import change from '../../../images/change.png'
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import MineMessage from './minemessage/MineMessage';

function Header() {
    return (
        <div className="header">
            <img src="//static-o2o.360buyimg.com/daojia/react/images/user_center_headbg.02208e0b.png"
                alt="" draggable="false" className="header-bg" />
            <div className="login-Head-portrait">
                <div className="login-box-border">
                    <img src={headPic}
                        alt="" draggable="false" className="Head-portrait" />
                </div>
                <span className="login-text">
                    青书
                </span>
                <span className="mine-phone">182****4867</span>
                <img src={change} alt="" draggable="false" className="mine-message-change" />
            </div>
            <Link to="/minemessage">
                <div className="message">
                    <div className="message-dot"></div>
                    <img src={message} alt="" />
                </div>
            </Link>
            <div className="wallet">
                <div className="mywallet">
                    <img src={wallet} alt="" />
                    我的钱包</div>
                <div className="line">
                    <img src={line} alt="" />
                </div>
                <div className="kinds">
                    <div className="red-packet">
                        <span className="null1">0</span>
                        <span className="hongbao">红包</span>
                    </div>
                    <div className="Mine-discount">
                        <span className="null2">0</span>
                        <span className="youhuiquan">优惠券</span>
                    </div>
                    <div className="bean">
                        <span className="null3">0</span>
                        <span className="xiandou">鲜豆</span>
                    </div>
                    <div className="white-bar">
                        <span className="null4">8000</span>
                        <span className="baitiao">白条</span>
                    </div>
                </div>

            </div>
            {/* <BrowserRouter> */}
               
                
            {/* </BrowserRouter> */}
        </div>
    )
}
export default Header