import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpeg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">misTrailer</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <a href="https://facebook.com/tamisseptian" target="_blank">Follow me</a>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">Premium</Link>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://www.themoviedb.org/?language=id" target="_blank">Recent release</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
