import React from 'react';
import './tabbar.css'
import home from '../../../images/home64.png'
import find from '../../../images/find.png'
import shopping from '../../../images/shopping.png'
import ordering from '../../../images/ordering.png'
import my from '../../../images/my.png'


function tabbar(){
    return(
        <div className="tabbar">
            <div className="index">
                <img src={home} alt=""/>
                <span>首页</span>
            </div>
            <div className="find">
                <img src={find} alt=""/>
                <span>发现</span>
            </div>
            <div className="shopping">
                <img src={shopping} alt=""/>
                <span>购物车</span>
            </div>
            <div className="ordering">
                <img src={ordering} alt=""/>
                <span>订单</span>
            </div>
            <div className="my">
                <img src={my} alt=""/>
                <span>我的</span>
            </div>
        </div>
    )
}
export default tabbar