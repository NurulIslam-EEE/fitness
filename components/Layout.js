import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import Slider from './slider';

const Layout = () => {
    return (
        <>
            <Banner />
            <Features />
            <Slider/>
            <Footer />
        </>
    );
};

export default Layout;