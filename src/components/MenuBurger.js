import React from 'react'
import './css/MenuBurger.css'

const MenuBurger = props => {
    
    const toggleMenu = () => {
        props.setMenu(!props.menu)
    }
    return (
        <>
            <div className={props.menu ? "open-menu-container menu-container" : "menu-container"} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="mbar">
                    <div className="mbar1"></div>
                    <div className="mbar2"></div>
                </div>
                <div className="bar3"></div>
            </div>
            <div className={props.menu ? "open-menu-burger menu-burger" : "menu-burger"}>
                <p className="burgerUserName">PROJETS</p>
                <p className="burgerUserName">COLLECTION</p>
                <p className="burgerUserName">CONTACT</p>
            </div>
        </>
    )
}

export default MenuBurger