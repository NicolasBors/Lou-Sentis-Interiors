import React, { useState, useEffect } from 'react'
import './css/Home.css'
// import louCardRB from '../assets/louCard.png'
import louCardWB from '../assets/LOGO BLANC.png'
// import louCardTop from '../assets/LOGO BLANC haut.png'
// import louCardBottom from '../assets/LOGO BLANC bas.png'

const Home = () => {

    const [start, setStart] = useState('logostart')
    const [shine, setShine] = useState('')
    const [isTop, setIsTop] = useState(true)
    const [headHeight, setHeadHeight] = useState(484)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setTimeout(() => setStart('logofull'), 100)
        setTimeout(() => setShine('shine'), 100)
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
            headerTop !== isTop
                ?
                setIsTop(false)
                :
                setIsTop(true)
        })
    }, [])

    // style={isTop ? null : { marginBottom: `${headHeight}px` }}

    return (
        <div className='home'>
            <div onClick={isTop ? null : () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} id='logoId' className={isTop ? 'logo-container' : 'logo-container2'}>
                <figure className={`logo-figure ${shine}`} >
                    <img className={start} src={louCardWB} alt='logo' />
                </figure>

            </div>
            <div className={`${isTop ? 'header2 header-invisible' : 'header header-visible'}`} >
                <p className='navbar-item-underline'>PROJETS</p>
                <p className='navbar-item-underline'>COLLECTION</p>
                <p className='navbar-item-underline'>CONTACT</p>
            </div>
        </div>
    )
}

export default Home