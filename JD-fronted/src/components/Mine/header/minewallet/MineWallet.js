import React from 'react';
import './minewallet.css'
import bean from '../../../../images/bean.png'
import shinshop from '../../../../images/shinshop.png'
import walletcard from '../../../../images/walletcard.png'
import walletredpacket from '../../../../images/walletredpacket.png'
import whitebar from '../../../../images/whitebar.png'
import valut from '../../../../images/valut.png'
import walletdiscount from '../../../../images/walletdiscount.png'
import walletgreater from '../../../../images/walletgreater.png'


function MineWallet() {
    return (
        <div className="minewallet">
            <div className="minewallet-topcontent">
                <div className="minewallet-redpacket">
                    <img src ={walletredpacket} alt="" className="walletredpacket-img" />
                    <span className="walletredpacket-title">红包</span>
                    <span className="walletredpacket-number">0个</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow" />
                </div>
                <div className="minewallet-discounnt">
                    <img src ={walletdiscount} alt="" className="walletdiscount-img" />
                    <span className="walletdiscount-title">优惠券</span>
                    <span className="walletdiscount-number">0张</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow" />
                </div>
                <div className="minewallet-gift">
                    <img src ={walletcard} alt="" className="walletgift-img" />
                    <span className="walletgift-title">礼品卡</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow1" />
                </div>
                <div className="minewallet-bean">
                    <img src={bean} alt="" className="walletbean-img" />
                    <span className="walletbean-title">鲜豆</span>
                    <span className="walletbean-number">0个</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow" />
                </div>
                <div className="minewallet-whitebar">
                    <img src ={whitebar} alt="" className="walletwhitebar-img" />
                    <span className="walletwhitebar-title">白条</span>
                    <span className="walletwhitebar-number">8000元</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow" />
                </div>
                <div className="minewallet-vault">
                    <img src ={valut} alt="" className="walletvault-img" />
                    <span className="walletvault-title">京东小金库</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow2" />
                </div>
            </div>
            <div className="minewalletdown-content">
                <div className="minewallet-card">
                    <img src ={shinshop} alt="" className="walletcard-img" />
                    <span className="walletcard-title">银行卡</span>
                    <span className="walletcard-number">解绑银行卡</span>
                    <img src ={walletgreater} alt="" className="minewallet-arrow" />
                </div>
            </div>
        </div>
    )
}
export default MineWallet