import React, { useState } from 'react'
import ImgSwiper from '../../../swiper/imgSwiper/ImgSwiper'
import swiper from '../../../images/swiper1.png'
import swiper1 from '../../../images/swiper2.png'
import swiper2 from '../../../images/swiper3.png'
import './mineswiper.css'
// import Swiper from './'
export default function MineSwiper() {
    const [SwieprName] = useState('MineSwiper')
    const [paginationName] = useState('MinePaginationName')
    return (
        <div className="mineswiper">
            <ImgSwiper swiperName={SwieprName} paginationName={paginationName}>
                <div className="mineswiper-img">
                    <img src={swiper} alt="" />
                </div>
                <div className="mineswiper-img">
                    <img src={swiper1} alt="" />
                </div>
                <div className="mineswiper-img">
                    <img src={swiper2} alt="" />
                </div>

            </ImgSwiper>
        </div>
    )
}
