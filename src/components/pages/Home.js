import '../../App.css';
import HeroSection from "../HeroSection";
import Footer from '../Footer'

import React from 'react';
import Cards from "../Cards";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    );
};

export default Home;
