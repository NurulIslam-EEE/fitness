import React from 'react';
import About from './About';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import Slider from './slider';

const Layout = () => {
    return (
        <>
            <Banner />
            <Features />
            <About/>
            <Slider/>
            <Footer />
        </>
    );
};

export default Layout;