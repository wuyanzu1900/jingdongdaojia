import React from 'react';
import Header from './header/Header';
import Swiper from './swiper/Swiper';
import Server from './server/server';
import More from './more/More';
import index from './index.css'

function Mine() {
    return (
        <div className="mine">
            <Header />
            <Swiper />
            <Server />
            <More />
        </div>

    )
}

export default Mine;