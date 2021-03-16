import React from 'react';
import Button from './Button'
import './Footer.css'
import {Link} from "react-router-dom";
import { FaPlane} from "react-icons/fa"

const Footer = () => {
    return (
        <div className='footer_container'>
            <section className="footer_subscription">
                <p className="footer_subscription_heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer_subscription_text">
                    You can unsubscribe at any time.
                </p>
                <div className="input_areas">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className='footer_input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer_links">
                <div className="footer_link_wrapper">
                    <div className="footer_link_items">
                        <h2>About Us</h2>
                        <Link to='/sign_up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer_link_wrapper">
                    <div className="footer_link_items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>FaceBook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
            <section className="social_media">
                <div className="social_media_wrap">
                    <div className="footer_logo">
                        <Link className="social_logo">
                            XPLOR <FaPlane/>
                        </Link>
                    </div>
                </div>
                <small className='website_rights'>XPLOR 2020</small>
                <div className="social_icons">
                    <Link className='social_icons_link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"> </i>
                    </Link>
                    <Link className='social_icons_link instagram'
                          to='/'
                          target='_blank'
                          aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"> </i>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Footer;
