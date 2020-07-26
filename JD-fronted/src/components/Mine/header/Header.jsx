import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'
import message from '../../../images/message.png';
import greater from '../../../images/greater.png'
import line from '../../../images/line.png'
import wallet from '../../../images/wallet.png'
import headPic from '../../../images/headPic.jpg'
import change from '../../../images/change.png'
import mineheaderbg from '../../../images/mineheaderbg.png'
import vplusbg from '../../../images/Vplusbg.png'
import shadow from '../../../images/shadow.png'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MineMessage from './minemessage/MineMessage';
import ProfilePhoto from './profilephoto/ProfilePhoto'
import MessageChange from './messagechange/MessageChange'
import MineWallet from './minewallet/MineWallet'
import MineRedPacket from './mineredpacket/MineRedPacket'


function Header() {
    return (
        <div className="header">
            <img src={mineheaderbg}
                alt="" draggable="false" className="header-bg" />
            <div className="login-Head-portrait">
                <Link to="/profilephoto">
                    <div className="login-box-border">
                        <img src={headPic}
                            alt="" draggable="false" className="Head-portrait" />
                    </div>
                    <span className="login-text">
                        青书
                    </span>
                </Link>
                <Link to="/messagechange">
                    <span className="mine-phone">182****4867</span>
                    <img src={change} alt="" draggable="false" className="mine-message-change" />
                </Link>
            </div>
            <Link to="/minemessage">
                <div className="message">
                    <div className="message-dot"></div>
                    <img src={message} alt="" />
                </div>
            </Link>
            <div className="vplusmember">
                <img src={vplusbg} alt="" className="vplusmemberbg" />

            </div>
            <div className="vplusmember-shadow">
                <img src={shadow} alt="" />
            </div>
            <div className="wallet">
                <Link to="/minewallet">
                    <div className="mywallet">
                        <img src={wallet} alt="" />
                        <span className="mywallet-title">
                            我的钱包
                        </span>
                    </div>
                </Link>

                <div className="line">
                    <img src={line} alt="" />
                </div>
                <div className="kinds">
                    <Link to="/mineredpacket">
                        <div className="red-packet">
                            <span className="null1">0</span>
                            <span className="hongbao">红包</span>
                        </div>
                    </Link>
                    <Link to="/minewalletdiscount">
                        <div className="Mine-discount">
                            <span className="null2">0</span>
                            <span className="youhuiquan">优惠券</span>
                        </div>
                    </Link>
                    <div className="bean">
                        <span className="null3">0</span>
                        <span className="xiandou">鲜豆</span>
                    </div>
                    <a href="https://m.jr.jd.com/consumer/baitiaom/index.html?source=#/index">
                        <div className="white-bar">
                            <span className="null4">8000</span>
                            <span className="baitiao">白条</span>
                        </div>
                    </a>

                </div>
            </div>
        </div>

    )
}
export default Header