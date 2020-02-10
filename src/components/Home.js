import React, { useState, useEffect } from 'react'
import './css/Home.css'
// import louCardRB from '../assets/louCard.png'
import louCardWB from '../assets/LOGO BLANC.png'
import MenuBurger from './MenuBurger'
// import louCardTop from '../assets/LOGO BLANC haut.png'
// import louCardBottom from '../assets/LOGO BLANC bas.png'

const Home = props => {

    const [start, setStart] = useState('logostart')
    const [shine, setShine] = useState('')
    const [headHeight, setHeadHeight] = useState(484)
    const [seeMenu, setSeeMenu] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setTimeout(() => setStart('logofull'), 100)
        setTimeout(() => setShine('shine'), 100)
        setTimeout(() => props.setContent(true), 600)
    })

    useEffect(() => {
        const logo = document.getElementById('logoId');
        const logoStyle = window.getComputedStyle(logo);
        const marginTopPx = logoStyle.getPropertyValue('margin-top')
        const marginTopInt = parseInt(marginTopPx, 10)
        const heightPx = logoStyle.getPropertyValue('height')
        const heightInt = (parseInt(heightPx, 10)) * (620 / 842)
        const fullHeight = marginTopInt + heightInt
        setHeadHeight(fullHeight)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const headerTop = window.scrollY < headHeight
            headerTop !== props.isTop
                ?
                props.setIsTop(false)
                :
                props.setIsTop(true)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            resize()
        })
    }, [])

    const resize = () => {
        let currentWidth = (window.innerWidth < 600);
        currentWidth ?
            setSeeMenu(true)
            :
            setSeeMenu(false)
    }

    const setCarousel = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setTimeout(() => props.setView('carousel'), 300)
    }

    const setMobilier = () => {
        props.setView('mobilier')
    }

    return (
        <div className='home'>
            <div onClick={props.isTop ? null : setCarousel} id='logoId' className={props.isTop ? 'logo-container' : 'logo-container2'}>
                <figure className={`logo-figure ${shine}`} >
                    <img className={start} src={louCardWB} alt='logo' />
                </figure>

            </div>
            {seeMenu ?
                <MenuBurger />
                :
                <div className={`${props.isTop || (window.innerHeight + window.scrollY) < document.body.offsetHeight ? 'header2 header-invisible' : 'header header-visible'}`} >
                    <div className='navbar-item-container1'>
                        <p className='navbar-main-item'>PROJETS</p>
                        <div className='navbar-item-sub-container1'>
                            <p className='navbar-item-sub'>PROJETS ÉTUDIANTS</p>
                            <p className='navbar-item-sub'>PROJETS PARTICULIERS</p>
                            <p className='navbar-item-sub'>PROJETS HÔTELIERS</p>
                        </div>
                    </div>
                    <div className='navbar-item-container2'>
                        <p className='navbar-main-item'>COLLECTION</p>
                        <div className='navbar-item-sub-container2'>
                            <p className='navbar-item-sub'>LUMINAIRE</p>
                            <p className='navbar-item-sub' onClick={setMobilier}>MOBILIER</p>
                            <p className='navbar-item-sub'>ACCESSOIRES</p>
                            <p className='navbar-item-sub'>TENDANCES</p>
                        </div>
                    </div>
                    <div className='navbar-item-container3'>
                        <p className='navbar-main-item'>CONTACT</p>
                        <div className='navbar-item-sub-container3'>
                        </div>
                    </div>
                </div >}

        </div>
    )
}

export default Home