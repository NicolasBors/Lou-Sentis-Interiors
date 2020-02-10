import React, { useState } from 'react'
import './css/MenuBurger.css'

const MenuBurger = () => {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <div className={menu ? "open-menu-container menu-container" : "menu-container"} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="mbar">
                    <div className="mbar1"></div>
                    <div className="mbar2"></div>
                </div>
                <div className="bar3"></div>
            </div>
            <div className={menu ? "slider menu-burger" : "menu-burger"}>
                <div className="burgerProfilePicParent" ><img src="/profilPic.png" alt="Profil" className="burgerProfilePic" /></div>
                <div className="burgerUserName" ><p></p></div>
                <div className="burgerJob"></div>
                <div className="burgerJob"></div>
                {/* <Link to="/Contact" className="burgerContact" >Contact</Link>
                <Link to="/Parameters" className="burgerParametres" >Paramètres</Link> */}
                <div className="burgerDeconnexion" onClick={() => /*{ if*/(window.confirm('Êtes-vous sur(e) de vouloir vous déconnecter ?'))/* this.onCancel(item)/* }*/} href="#">Deconnexion</div>
            </div>
        </>
    )
}

export default MenuBurger