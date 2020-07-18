import React from 'react';
import Header from './header/Header';
import Wallet from './wallet/Wallet';
import Swiper from './swiper/Swiper';
import Server from './server/server';
import More from './more/More';

function Mine() {
    return (
        <div>
            <Header />
            <Wallet />
            <Swiper />
            <Server />
            <More />
        </div>

    )
}

export default Mine;