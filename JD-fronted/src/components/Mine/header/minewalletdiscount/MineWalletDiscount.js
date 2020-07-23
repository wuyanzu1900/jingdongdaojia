import React from 'react';
import './minewalletdiscount.css'
import noshow from '../../../../images/noshow.png'

export default function MineWalletDiscount(props){
    return(
        <div className="minewalletdiscount">
        <div className="minewalletdiscount-header">
        <span className="minewalletdiscount-headertitle">
        ＋ 使用兑换码
        </span>
        </div>   
        <div className="minewalletdiscount-content">
            <img src={noshow} alt="" className="minewalletdiscount-bg"/>
            <span className="minewalletdiscount-text">暂无可用优惠券</span>
        </div>
        <div className="minewalletdiscount-footer">
            <span className="minewalletdiscount-leftfooter">优惠券说明</span>
            <span className="minewalletdiscount-centerfooter">|</span>
            <span className="minewalletdiscount-rightfooter">查看不可用优惠券</span>
        </div>
    </div>
    )
   
}