import React, { Component, useState, useEffect } from 'react';
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
import spritimg from '../../images/spritimg.png'



function ShoppingCart() {
    const [shopsName, setShopsName] = useState('')
    const [shopsType, setShopsType] = useState('')
    const [nums1, setnums1] = useState(1)
    const [nums2, setnums2] = useState(1)
    useEffect(() => {
        fetch('http://localhost/shoppingcart')
            .then(res => res.json())
            .then(res => {
                setShopsName(res.ShopsName)
                setShopsType(res.ShopsType)
            })
    }, [])
    console.log(shopsType, "=============")
    const total = shopsType == '' ? null : (Number(shopsType[0].price)*nums1+ Number(shopsType[1].price)*nums2).toFixed(1)
    return (
        <div className="shoppingcart">
            <div className="shoppingcart-allshops">
                <div className="spriteimg">
                    <img src={spritimg} alt="" className="spriteselect" />
                </div>
                <div className="shoppingcart-header">
                    <div className="sprite-header"></div>
                    {/* {shop.ShopsType?.map((ShopsType)=>{ */}
                    {/* return( */}
                    <span className="shoppingcart-storename">
                        {shopsName}
                    </span>
                    {/* ) */}
                    {/* })} */}
                    <img src={shoppingcartarrow32} alt="" className="shoppingcart-arrow" />
                    <img src={shoppingcartdiscount} alt="" className="shoppingcart-discount" />
                    <span className="shoppingcart-divide">|</span>
                    <span className="shoppingcart-clear" onClick={() => { setnums1(0);setnums2(0)}}>清空购物车</span>
                </div>
                <div className="shoppingcart-content">
                    <div className="shoppingcart-shops1">
                        {/* <span className="shoppingcart-check1">
                            <input className="content-checked1" type="checkbox" value="" />
                        </span> */}
                        <div className="sprite-middle"></div>
                        <img src={adaofu} alt="" className="adaofu" />
                        <div className="shop1-position">
                            <span className="shops1-title">{shopsType[0]?.name}</span>
                            <div className="position-down">
                                <span className="shop1-price">￥{shopsType[0]?.price}</span>
                                <div className="numplus1">
                                    <img src={shopreduce} alt="" className="shopreduce" onClick={() => { setnums1(nums1 - 1) }} />
                                    <div className="shop1-nums">{nums1}</div>
                                    <img src={shopadd} alt="" className="shopadd" onClick={() => { setnums1(nums1 + 1) }} />
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="shoppingcart-shops2">
                        {/* <div className="shoppingcart-check2">
                            <input className="content-checked2" type="checkbox" value="" />
                        </div> */}
                        <div className="sprite-footer"></div>
                        <img src={qingyang} alt="" className="qingyang" />
                        <div className="shop2-position">
                            <span className="shops2-title">{shopsType[1]?.name}</span>
                            <div className="shop2position-down">
                                <span className="origin-price">{shopsType[1]?.oldprice}</span>
                                <span className="shop2-price">￥{shopsType[1]?.price}</span>
                                <div className="numplus2">
                                    <img src={shopreduce} alt="" className="shopreduce" onClick={() => { setnums2(nums2 - 1) }} />
                                    <div className="shop2-nums">{nums2}</div>
                                    <img src={shopadd} alt="" className="shopadd" onClick={() => { setnums2(nums2 + 1) }} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="shoppingcart-pay">
                        <div className="shopingcart-cheaper">已减{
                       shopsType == '' ? null : Number(shopsType[1].oldprice*nums2).toFixed(1)
                        }元</div>
                        <div className="shoppingcart-allprice">￥{total}</div>
                        <div className="allpay-button">
                            <button className="shopingcart-btn">去结算</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shoppingcart-down">
                <img src={shoppingcartsite} alt="" className="shoppingcart-site" />
                <span className="shoppingdown-site">其他位置</span>
            </div>

            <Tabbar />
        </div>
    );
}
export default ShoppingCart;
