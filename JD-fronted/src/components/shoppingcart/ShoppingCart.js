import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Tabbar from '../common/tabBar/index'
import index from './shoppingcart.css'
import shoppingcartdiscount from '../../images/shoppingcartdiscount.png'
import shoppingcartarrow32 from '../../images/shoppingcartarrow32.png'
import adaofu from '../../images/adaofu.jpg'
import qingyang from '../../images/qingyang.jpg'


function ShoppingCart() {
    return (
        <div className="shoppingcart">
            <div className="shoppingcart-allshops">
                <div className="shoppingcart-header">
                    <span className="shoppingcart-selector">
                        <input className="shopname" type="checkbox" value="" />
                    </span>
                    <span className="shoppingcart-storename">华润万家-冠寓店</span>
                    <img src={shoppingcartarrow32} alt="" className="shoppingcart-arrow" />
                    <img src={shoppingcartdiscount} alt="" className="shoppingcart-discount" />
                    <span className="shoppingcart-divide">|</span>
                    <span className="shoppingcart-clear">清空购物车</span>
                </div>
                <div className="shoppingcart-content">
                    <div className="shoppingcart-shops1">
                        <span className="shoppingcart-check1">
                            <input className="content-checked1" type="checkbox" value="" />
                        </span>
                        <img src={adaofu} alt="" className="adaofu" />
                        <div className="shop1-position">
                            <span className="shops1-title">阿道夫无硅油洗发水800g</span>
                            <span className="position-down">
                                <span className="shop1-price">￥148</span>
                                <span className="shop1-reduce">-</span>
                                <span className="shop1-nums">1</span>
                                <span className="shop1-plus">+</span>
                            </span>
                        </div>


                    </div>
                    <div className="shoppingcart-shops2">
                        <span className="shoppingcart-check2">
                            <input className="content-checked2" type="checkbox" value="" />
                        </span>
                        <img src={qingyang} alt="" className="qingyang" />
                        <div className="shop2-position">
                            <span className="shops2-title">清扬植觉净透去屑洗发露700ml</span>
                            <span className="shop2position-down">
                                <span className="shop2-price">￥148</span>
                                <span className="shop3-reduce">-</span>
                                <span className="shop4-nums">1</span>
                                <span className="shop5-plus">+</span>
                            </span>
                        </div>


                    </div>
                </div>
            </div>

            <div className="shoppingcart-down">
                <img src="" alt="" className="shoppingcart-site" />
                <span className="shoppingdown-site">其他位置</span>
            </div>
        </div>
    );
}
export default ShoppingCart;
