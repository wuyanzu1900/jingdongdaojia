import React, { useEffect, useState } from 'react';
import './messagechange.css'
import card from '../../../../images/card.png'
import phone from '../../../../images/phone.png'
import greaterthan from '../../../../images/greaterthan.png'

function MessageChange() {
    const [a , seta] = useState('')
    useEffect(()=>{
        fetch('http://localhost/supermarket')
        .then(res=>res.json())
        .then(res => {
            seta(res)
        })
    },[])
    console.log(a.ProductArticles)
    return (
        <div className="messagechange">
            <div>
                {a.ProductArticles?.map((a)=>{
                    return (
                        <div>
                            <div className="img">
                                <img src={a.img} alt=""/>
                            </div>
                            {a.type}
                        </div>
                    )
                })}
            </div>
            <div className="messagechange-head">
                <span className="messagechange-ways">
                    请选择合适的认证方式
                </span>
            </div>
            <div className="messagechange-content">
                <div className="messagechange-card">
                    <img src={card} alt="" className="card-img" />
                    <span className="card-title">使用  关联新银行卡</span>
                    <img src={greaterthan} alt="" className="messagechange-arrow1" />
                </div>
                <div className="messagechange-cardmessage">
                    <img src={card} alt="" className="cardmessage-img" />
                    <span className="cardmessage-title">使用  关联银行卡信息</span>
                    <img src={greaterthan} alt="" className="messagechange-arrow" />

                </div>
                <div className="messagechange-verify">
                    <img src={phone} alt="" className="verify-img" />
                    <span className="verify-title">使用  手机短信验证码</span>
                    <img src={greaterthan} alt="" className="messagechange-arrow" />
                </div>
            </div>

        </div>
    )
}

export default MessageChange