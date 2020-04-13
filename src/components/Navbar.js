import React, { useState, useEffect } from 'react'
import './css/Navbar.css'
import MenuBurger from './MenuBurger'
import louCardTop from '../assets/logos/LOGO BLANC haut.png'

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
        let currentWidth = (window.innerWidth < 800);
        currentWidth ?
            setSeeMenu(true) :
            setSeeMenu(false)
    }

    const setMobilier = () => {
        props.setView('MOBILIER')
    }

    const setLuminaire = () => {
        props.setView('LUMINAIRE')
    }

    const setAccessoires = () => {
        props.setView('ACCESSOIRES')
    }

    const setTendances = () => {
        props.setView('TENDANCES')
    }

    const setContact = () => {
        props.setView('CONTACT')
    }

    const setHome = () => {
        props.setView('HOME')
    }

    const setCollection = () => {
        props.setView('COLLECTION')
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
                            <div className='navbar-item-container1' >
                                <p className='navbar-main-item' > PROJETS </p>
                                <div className='navbar-item-sub-container1' >
                                    <p className='navbar-item-sub' > HÔTELS </p>
                                    <p className='navbar-item-sub' > PARTICULIERS </p>
                                    <p className='navbar-item-sub' > PROJETS ÉTUDIANTS </p>
                                </div>
                            </div>
                            <div className='navbar-item-container2' >
                                <p className='navbar-main-item' onClick={setCollection} > COLLECTION </p>
                                <div className='navbar-item-sub-container2' >
                                    <p className='navbar-item-sub' onClick={setAccessoires}> ACCESSOIRES </p>
                                    <p className='navbar-item-sub' onClick={setLuminaire}> LUMINAIRE </p>
                                    <p className='navbar-item-sub' onClick={setMobilier} > MOBILIER </p>
                                    <p className='navbar-item-sub' onClick={setTendances}> TENDANCES </p>
                                </div>
                            </div>
                            <div className='navbar-item-container3' >
                                <p className='navbar-main-item' onClick={setContact} > CONTACT </p>
                                <div className='navbar-item-sub-container3' >
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            }
        </div>
    )
}

export default Navbar