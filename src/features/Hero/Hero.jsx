import React from 'react';
import './Hero.scss';
import heroImg from '../../assets/images/illustration-hero.svg'
import { LinkButton } from '../../components';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero__contener'>
                <div className='hero__contener__bgObject'></div>
                <img src={heroImg} alt='hero img' className='hero__contener__img' />
            </div>
            <div className='hero__contener2'>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='hero__contener2__btns'>
                    <LinkButton href='/' variant='blue'>Get it on Chrome</LinkButton>
                    <LinkButton href='/' variant='gray'>Get it on Firefox</LinkButton>
                </div>
            </div>

        </section>
    );
};

export default Hero;