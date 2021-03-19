import React from 'react';
import Button from './Button'
import './HeroSection.css';
import '../App.css'

const HeroSection = () => {
    return (
        <div className='hero_container'>
            <video src='./videos/video4.mp4' autoPlay muted />
            <h1>Explore Today</h1>
            <p>What are you waiting for?</p>
            <div className='hero_btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get started now!
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};


export default HeroSection;
