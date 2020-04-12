import React, { useState, useEffect } from 'react'

import './css/Navbar.css'

import MenuBurger from './MenuBurger'


import louCardTop from '../assets/LOGO BLANC haut.png'

const Navbar = props => {

    const [seeMenu, setSeeMenu] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize()
        })
    }, [])

    useEffect(() => {
        setSize()
    }, [])

    const setSize = () => {
        let currentWidth = (window.innerWidth < 600);
        currentWidth ?
            setSeeMenu(true) :
            setSeeMenu(false)
    }

    const setMobilier = () => {
        props.setView('mobilier')
    }

    const setContact = () => {
        props.setView('contact')
    }

    const setHome = () => {
        props.setView('home')
    }

    return (
        <div>



            {seeMenu ?
                props.isTop || (window.innerHeight + window.scrollY) < document.body.offsetHeight ?
                    null
                    :
                    < MenuBurger {...props} setMobilier={setMobilier} setContact={setContact} />
                :
                <div className={props.opacity ? 'header' : 'all-before'} >
                    <div className='header-container'>
                        <div className='header-logo' onClick={setHome}>
                            <img src={louCardTop} alt='Lou Sentis' />
                        </div>
                        <div className='navbar'>
                            {/* <div className='navbar-item-container1' >
                                <p className='navbar-main-item' > PROJETS </p>
                                <div className='navbar-item-sub-container1' >
                                    < p className='navbar-item-sub' > PROJETS ÉTUDIANTS </p>
                                    <p className='navbar-item-sub' > PROJETS PARTICULIERS </p>
                                    <p className='navbar-item-sub' > PROJETS HÔTELIERS </p>
                                </div>
                            </div>
                            <div className='navbar-item-container2' >
                                <p className='navbar-main-item' > COLLECTION </p>
                                <div className='navbar-item-sub-container2' >
                                    <p className='navbar-item-sub' > LUMINAIRE </p>
                                    <p className='navbar-item-sub' onClick={setMobilier} > MOBILIER </p>
                                    <p className='navbar-item-sub' > ACCESSOIRES </p>
                                    <p className='navbar-item-sub' > TENDANCES </p>
                                </div>
                            </div>
                            <div className='navbar-item-container3' >
                                <p onClick={setContact} className='navbar-main-item' > CONTACT </p>
                                <div className='navbar-item-sub-container3' >
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className='header-fondu'>
                    </div>
                </div >

            }
        </div>
    )
}

export default Navbar