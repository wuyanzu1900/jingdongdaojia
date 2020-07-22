import React from 'react';
import './mineredpacket.css'
import noshow from '../../../../images/noshow.png'


export default function MineRedPacket(props){
    return(
        <div className="mineredpacket">
            <div className="mineredpacket-content">
                <img src={noshow} alt="" className="mineredpacket-bg"/>
                <span className="content-text">暂无可用红包</span>
            </div>
            <div className="mineredpacket-footer">
                <span className="left-footer">红包说明</span>
                <span className="center-footer">|</span>
                <span className="right-footer">查看不可用红包</span>
            </div>
        </div>
    )
}