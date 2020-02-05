import React, { useState, useEffect } from 'react'
import './css/Home.css'
// import louCardRB from '../assets/louCard.png'
import louCardWB from '../assets/LOGO BLANC.png'
// import louCardTop from '../assets/LOGO BLANC haut.png'
// import louCardBottom from '../assets/LOGO BLANC bas.png'

const Home = props => {

    const [start, setStart] = useState('logostart')
    const [shine, setShine] = useState('')
    const [headHeight, setHeadHeight] = useState(484)

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

    // style={isTop ? null : { marginBottom: `${headHeight}px` }}

    return (
        <div className='home'>
            <div onClick={props.isTop ? null : () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} id='logoId' className={props.isTop ? 'logo-container' : 'logo-container2'}>
                <figure className={`logo-figure ${shine}`} >
                    <img className={start} src={louCardWB} alt='logo' />
                </figure>

            </div>
            <div className={`${props.isTop ? 'header2 header-invisible' : 'header header-visible'}`} >
                <div>
                    <p className='navbar-item-underline'>PROJETS</p>
                    <p className='navbar-item-sub'>PROJETS ÉTUDIANTS</p>
                    <p className='navbar-item-sub'>PROJETS PARTICULIERS</p>
                    <p className='navbar-item-sub'>PROJETS HÔTELIERS</p>
                </div>
                <div>
                    <p className='navbar-item-underline'>COLLECTION</p>
                </div>
                <div>
                    <p className='navbar-item-underline'>CONTACT</p>
                </div>

            </div>
        </div>
    )
}

export default Home