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
                <h1>PROJETS</h1>
                <p> PROJETS ÉTUDIANTS </p>
                <p> PROJETS PARTICULIERS </p>
                <p> PROJETS HÔTELIERS </p>
                <h1>COLLECTION</h1>
                <p> LUMINAIRE </p>
                <p onClick={() => { props.setMobilier(); toggleMenu() }}> MOBILIER </p>
                <p> ACCESSOIRES </p>
                <p> TENDANCES </p>
                <h1 className='burger-contact' onClick={() => { props.setContact(); toggleMenu() }}>CONTACT</h1>
            </div>
        </>
    )
}

export default MenuBurger