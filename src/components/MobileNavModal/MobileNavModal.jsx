import React from "react";
import "./MobileNavModal.scss";
import iconClose from "../../assets/images/icon-close.svg";
import logoTwitter from '../../assets/images/icon-twitter.svg';
import logoFacebook from '../../assets/images/icon-facebook.svg';
import Logo from "../Logo/Logo";

const MobileNavModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="mobile-modal">
      <div className="mobile-modal__header">
        <Logo className="mobile-modal__logo" circleColor="#FFF" flagColor="#313750" />
        <button className="mobile-modal__close" onClick={onClose} aria-label="Close menu">
          <img src={iconClose} alt="Close" />
        </button>
      </div>
      <nav className="mobile-modal__nav" onClick={onClose} >
        <a href="#features">FEATURES</a>
        <a href="#pricing">PRICING</a>
        <a href="#contact">CONTACT</a>
        <a href="#login" className="mobile-modal__login">LOGIN</a>
      </nav>
      <div className="mobile-modal__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={logoFacebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={logoTwitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default MobileNavModal;
