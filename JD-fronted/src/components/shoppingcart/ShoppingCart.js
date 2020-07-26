import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Tabbar from '../common/tabBar/index'
import index from './shoppingcart.css'
import shoppingcartdiscount from '../../images/shoppingcartdiscount.png'
import shoppingcartarrow32 from '../../images/shoppingcartarrow32.png'
import adaofu from '../../images/adaofu.jpg'
import qingyang from '../../images/qingyang.jpg'
import shoppingcartsite from '../../images/shoppingcartsite.png'
import shopreduce from '../../images/numreduce.png'
import shopadd from '../../images/shopadd.png'



function ShoppingCart() {
    return (
        <div className="shoppingcart">
            <div className="shoppingcart-allshops">
                <div className="shoppingcart-header">
                    <div className="shoppingcart-selector">
                        <input className="shopname" type="checkbox" value="" />
                    </div>
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
                            <div className="position-down">
                                <span className="shop1-price">￥148</span>
                                <div className="numplus1">
                                    <img src={shopreduce} alt=""className="shopreduce"/>
                                    <div className="shop1-nums">1</div>
                                    <img src={shopadd} alt="" className="shopadd"/>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="shoppingcart-shops2">
                        <div className="shoppingcart-check2">
                            <input className="content-checked2" type="checkbox" value="" />
                        </div>
                        <img src={qingyang} alt="" className="qingyang" />
                        <div className="shop2-position">
                            <span className="shops2-title">清扬植觉净透去屑洗发露700ml</span>
                            <div className="shop2position-down">
                                <span className="shop2-price">￥67.8</span>
                                <div className="numplus2">
                                    <img src={shopreduce} alt="" className="shopreduce"/>
                                    <div className="shop2-nums">1</div>
                                    <img src={shopadd} alt="" className="shopadd"/>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="shoppingcart-down">
                <img src={shoppingcartsite} alt="" className="shoppingcart-site" />
                <span className="shoppingdown-site">其他位置</span>
            </div>
        </div>
    );
}
export default ShoppingCart;
