import React, { useState, useEffect } from 'react'
import './css/Home.css'
import louCardWB from '../assets/LOGO BLANC.png'
import MenuBurger from './MenuBurger'
import scrollArrow from '../assets/scrollArrow.png'
// import louCardTop from '../assets/LOGO BLANC haut.png'
// import louCardBottom from '../assets/LOGO BLANC bas.png'
// import louCardRB from '../assets/louCard.png'

const Home = props => {

    const [start, setStart] = useState('logostart')
    const [shine, setShine] = useState('')
    const [seeMenu, setSeeMenu] = useState(false)
    const [arrow, setArrow] = useState(false)

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            window.scrollTo(0, 0)
        })
    }, [])

    useEffect(() => {
        setSize()
        setTimeout(() => setStart('logofull'), 100)
        setTimeout(() => setShine('shine'), 100)
        setTimeout(() => props.setContent(true), 600)
        setTimeout(() => setArrow(true), 1800)
    }, [])

    useEffect(() => {
        const logo = document.getElementById('logoId');
        const logoStyle = window.getComputedStyle(logo);
        const marginTopPx = logoStyle.getPropertyValue('margin-top')
        const marginTopInt = parseInt(marginTopPx, 10)
        const heightPx = logoStyle.getPropertyValue('height')
        const heightInt = (parseInt(heightPx, 10)) * (620 / 842)
        const fullHeight = marginTopInt + heightInt
        props.setHeadHeight(fullHeight)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const headerTop = window.scrollY < props.headHeight
            headerTop !== props.isTop ?
                props.setIsTop(false) :
                props.setIsTop(true)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setArrow(false)
        })
    })

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize()
        })
    }, [])

    const setSize = () => {
        let currentWidth = (window.innerWidth < 600);
        currentWidth ?
            setSeeMenu(true) :
            setSeeMenu(false)
    }

    const setCarousel = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setTimeout(() => props.setView('carousel'), 500)
    }

    const setMobilier = () => {
        props.setView('mobilier')
    }

    const setContact = () => {
        props.setView('contact')
    }

    return (
        <div className='home' >
            <div onClick={props.isTop ? null : setCarousel} id='logoId' className={props.isTop ? 'logo-container' : 'logo-container2'} >
                <figure className={`logo-figure ${shine}`} >
                    <img className={start}
                        src={louCardWB}
                        alt='logo' />
                </figure> </div> {
                arrow && window.scrollY === 0 ?
                    <div className='arrow-container' >
                        <img className='scoll-arrow'
                            src={scrollArrow}
                            alt='Scroll down' />
                    </div> : null
            }
            {
                seeMenu ?
                    props.isTop || (window.innerHeight + window.scrollY) < document.body.offsetHeight ?
                        null
                        :
                        < MenuBurger {...props} setMobilier={setMobilier} setContact={setContact} />
                    :
                    <div className={`${props.isTop || (window.innerHeight + window.scrollY) < document.body.offsetHeight ? 'header2 header-invisible' : 'header header-visible'}`} >
                        <div className='navbar-item-container1' >
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
                        </div>
                    </div >}

        </div>
    )
}

export default Home