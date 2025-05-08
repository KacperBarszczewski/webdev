import React from 'react';
import './Navbar.scss';
import logoImg from '../../assets/images/logo-bookmark.svg';
import hamburgerImg from '../../assets/images/icon-hamburger.svg';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={logoImg} alt="Logo" className="navbar-logo" />
            </div>
            <div>
                <img src={hamburgerImg} alt='hamburger' className='hamburger' />
            </div>
        </nav>
    );
};

export default NavBar;