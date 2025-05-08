import React from 'react';
import './Footer.scss';
import { Logo } from '../../components';
import logoTwitter from '../../assets/images/icon-twitter.svg';
import logoFacebook from '../../assets/images/icon-facebook.svg';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__contener'>
                <Logo className="footer__contener__logo-svg" />
                <a href='#features'>FEATURES</a>
                <a>PRICING</a>
                <a href='#contact'>CONTACT</a>
                <div className='footer__contener__socials'>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={logoFacebook} alt="Facebook" className='footer__contener__socials__img' />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                        <img src={logoTwitter} alt="Twitter" className='footer__contener__socials__img' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;