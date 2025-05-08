import React from "react";
import "./Modal.scss";
import iconClose from "../../assets/images/icon-close.svg";
import imgTab3 from '../../assets/images/illustration-features-tab-3.svg';
import LinkButton from "../LinkButton/LinkButton";

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="tabs__content">

                    <button className="modal__close" onClick={onClose} aria-label="Close menu">
                        <img src={iconClose} alt="Close" />
                    </button>
                    
                    <div className="tabs__content__image">
                        <div className='tabs__content__image__bgObject'></div>
                        <img src={imgTab3} alt="Feature Illustration" />
                    </div>
                    <div className="tabs__content__text">
                        <h3>Share your bookmarks</h3>
                        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <div className="tabs__content__text__btn">
                            <LinkButton>More Info</LinkButton>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
