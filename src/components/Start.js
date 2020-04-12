import React, { useState, useEffect } from 'react'
import './css/Start.css'
import louCardWB from '../assets/LOGO BLANC.png'

const Start = props => {

    const [logo, setLogo] = useState('logostart')
    const [shine, setShine] = useState('')

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            window.scrollTo(0, 0)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => setLogo('logofull'), 100)
        setTimeout(() => setShine('shine'), 400)
        setTimeout(() => props.setStart(false), 1200)
        setTimeout(() => props.setOpacity(true), 1300)
        // setTimeout(() => props.setContent(true), 600)
    }, [])

    // useEffect(() => {
    //     const logo = document.getElementById('logoId');
    //     const logoStyle = window.getComputedStyle(logo);
    //     const marginTopPx = logoStyle.getPropertyValue('margin-top')
    //     const marginTopInt = parseInt(marginTopPx, 10)
    //     const heightPx = logoStyle.getPropertyValue('height')
    //     const heightInt = (parseInt(heightPx, 10)) * (620 / 842)
    //     const fullHeight = marginTopInt + heightInt
    //     props.setHeadHeight(fullHeight)
    // }, [])

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         const headerTop = window.scrollY < props.headHeight
    //         headerTop !== props.isTop ?
    //             props.setIsTop(false) :
    //             props.setIsTop(true)
    //     })
    // }, [])




    // const setCarousel = () => {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    //     setTimeout(() => props.setView('carousel'), 500)
    // }



    return (
        props.start ?
        <div className='start' >
            <div id='logoId' className={'logo-container'} >
                <figure className={`logo-figure ${shine}`} >
                    <img className={logo}
                        src={louCardWB}
                        alt='logo' />
                </figure>
            </div>
        </div>
        :
        null
    )
}

export default Start