import React from 'react';
import './minemessage.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import onlineservice from '../../../../images/onlineservice.png'
import car from '../../../../images/car.png'
function MineMessage() {
    return (
        <div className="mine-message">
            <div className="online-service">
                <img src={onlineservice} alt="" className="online" />
                <div className="message-content1">
                    <span className="message1">在线客服</span>
                    <span className="message2">点击查看您与客服的沟通记录</span>
                </div>

            </div>
            <div className="logistics">
                <img src={car} alt="" className="car-logistics" />
                <div className="message-content">
                    <div className="message-content2">
                        <span className="logistics1">物流通知</span>
                        <div className="logistics-time">2020年01月03日 18:10</div>
                    </div>
                    <div className="message-content3">
                        <span className="logistics2">您的订单已配送完成,欢迎再次购买。</span>
                        <div className="logistics-dot"></div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default MineMessage