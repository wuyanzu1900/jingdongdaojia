import React from 'react'
import more from './more.css'
import about from '../../../images/about.png'
import register from '../../../images/register.png'
import merchants from '../../../images/merchants.png'
import financial from '../../../images/financial.png'
import discounts from '../../../images/discounts.png'
import hotline from '../../../images/hotline.png'
import pay from '../../../images/pay.png'
function More() {
    return (
        <div className="more">
            <span className="more-title">更多推荐</span>
            <div className="more-top">
                <div className="about">
                    <img src={about} alt="" />
                    <span>关于我们</span>
                </div>
                <div className="register">
                    <img src={register} alt="" />
                    <span>配送员注册</span>
                </div>
                <div className="merchants">
                    <img src={merchants} alt="" />
                    <span>商家入驻</span>
                </div>
                <div className="financial">
                    <img src={financial} alt="" />
                    <span>金融权益</span>
                </div>
                <div />
            </div>
            <div className="more-bottom">
                <div className="discounts">
                    <img src={discounts} alt="" />
                    <span >白条立减</span>
                </div>
                <div className="hotline">
                    <img src={hotline} alt="" />
                    <span >全城热线8</span>
                </div>
                <div className="pay">
                    <img src={pay} alt="" />
                    <span >支付优惠</span>
                </div>
            </div>

        </div>
    )

}
export default More