import React from 'react';

import './navbar.css'
import InputText from './Input';
import Logo from './Logo'
import ObtionMenus from './OptionsMenu'

const Navbar = () => {
    const listIcon = [
            {url: "item"},
            {url: "item"},
            {url: "item"},
            {url: "item"},
            {url: "item"}]

    return <header className="navbar-container">
        <div className="parts-nav">
            <Logo/>
        </div>
        <div className="parts-nav-medio">
        <InputText/>

        </div>
    
        <div className="parts-nav ">
            <ObtionMenus/>
        </div>
       
        
    </header>;
}
 
export default Navbar;