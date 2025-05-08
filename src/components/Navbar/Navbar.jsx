import React, { useState } from 'react';
import './Navbar.scss';
import logoImg from '../../assets/images/logo-bookmark.svg';
import hamburgerImg from '../../assets/images/icon-hamburger.svg';
import MobileNavModal from '../MobileNavModal/MobileNavModal';


const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <header className="navbar">
                <nav className="navbar__container">

                    <div>
                        <img src={logoImg} alt="Logo" className="navbar__container__logo" />
                    </div>
                    <div>
                        <button style={{ background: 'none', border: 'none' }} onClick={() => setModalOpen(true)} aria-label="Open mobile menu">
                            <img src={hamburgerImg} alt='hamburger' className='navbar__container__hamburger' />
                        </button>

                        <div className='navbar__container__links'>
                            <a href="#features" className='navbar__link'>Features</a>
                            <a href="#pricing" className='navbar__link'>Pricing</a>
                            <a href="#contact" className='navbar__link'>Contact</a>
                            <button>Login</button>
                        </div>
                    </div>
                </nav>
            </header>
            <MobileNavModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>

    );
};

export default NavBar;