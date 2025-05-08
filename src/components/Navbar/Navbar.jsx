import React from 'react';
import './Navbar.scss';
import logoImg from '../../assets/images/logo-bookmark.svg';
import hamburgerImg from '../../assets/images/icon-hamburger.svg';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">

                <div>
                    <img src={logoImg} alt="Logo" className="navbar__container__logo" />
                </div>
                <div>
                    <img src={hamburgerImg} alt='hamburger' className='navbar__container__hamburger' />
                    <div className='navbar__container__links'>
                        <a href="#features" className='navbar__link'>Features</a>
                        <a href="#pricing" className='navbar__link'>Pricing</a>
                        <a href="#contact" className='navbar__link'>Contact</a>
                        <button>Login</button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;