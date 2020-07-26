import React from 'react';
import './serverfocus.css'
import serverstar from '../../../../images/serverstar.png'
import focusimg from '../../../../images/focusimg.jpg'


function ServerFocus() {
    return (
        <div className="serverfocus">
            <div className="serverfocus-all">
                <div className="serverfocusimg">
                    <span className="serverimg-focus">关注</span>
                    <img src={focusimg} alt="" className="focus-img" />
                </div>
                <div className="serverfocus-content">
                    <span className="focuscontent-top">水果主题  【红谷滩店】</span>
                    <span className="focuscontent-middle">
                        <span className="left-star">
                            <img src={serverstar} alt="" className="saler-star" />
                            <span className="server-score">4.7</span>
                        </span>
                        <span className="middle-sale">月售百+</span>
                        <span className="server-time">60分钟</span>
                        <span className="server-separator">|</span>
                        <span className="right-distance">16.5km</span>
                    </span>
                    <span className="focuscontent-down">
                        <span className="left-delivery">起送￥10</span>
                        <span className="down-separator">|</span>
                        <span className="delivery-pay">基础运费4.5</span>
                        <span className="dada">达达快递</span>
                    </span>
                </div>
              
            </div>
            <div className="focusmore">没有更多门店了</div>
        </div>
    )
}

export default ServerFocus
