import React from 'react';

import './css/header.css'
import logo from './assets/logo.svg'
const Header = () => {
    return (  
        <section className="header">
            <div className="logo">
                <img src={logo} alt="cir"/>
            </div>
        </section>
    );
}
 
export default Header;