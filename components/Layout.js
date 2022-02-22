
import React from 'react';
import About from './About';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './slider';

import TimeTable from './TimeTable';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Features />

            <About />
            <TimeTable />


            <About />


            <Slider />
            <Footer />
        </>
    );
};


export default Layout;