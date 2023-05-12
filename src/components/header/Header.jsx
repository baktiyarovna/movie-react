import React from 'react';
import "../../components/header/header.scss"
import movix from "../../img/logo-full.png"
import {Link, NavLink} from "react-router-dom"
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-items">
                        <NavLink to={'/'}>
                        <div className="header-items--logo">
                            <img src={movix} alt=""/>
                        </div>
                        </NavLink>
                        <nav className="header-items--nav">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/popular'}>Popular</NavLink>
                            <NavLink to={'/top-rated'}>TopRated</NavLink>
                            <NavLink to={'/pricing'}>Pricing</NavLink>

                        </nav>
                    </div>
                    <div className="header-buttons">
                        <button>log in</button>
                        <button>sing up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;