import React from 'react';

import Options from '../Options/Options'
import './Header.css'

import logo from './Destiny-logo-white.jpeg'

function Header() {
    return (
        <header>
            <div className="container-header">
                <div className="container-logo">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1>Destiny</h1>
                </div>
                <Options />
            </div>
        </header>
    )
}

export default React.memo(Header);