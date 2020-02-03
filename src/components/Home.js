import React, { useState, useEffect } from 'react'
import './css/Home.css'
import louCardRB from '../assets/louCard.png'
import louCardWB from '../assets/LOGO BLANC.png'
import louCardTop from '../assets/LOGO BLANC haut.png'
import louCardBottom from '../assets/LOGO BLANC bas.png'

const Home = () => {

    const [start, setStart] = useState('logostart')
    const [shine, setShine] = useState('')
    const [isTop, setIsTop] = useState(true)
    const [tagHeight, setTagHeight] = useState(484)

    useEffect(() => {
        window.scroll(0, 0)
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
        const heightInt = (parseInt(heightPx, 10))*0.736342
        const fullHeight = marginTopInt + heightInt
        setTagHeight(fullHeight)
    }, [])    

    console.log(tagHeight);
    

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const headerTop = window.scrollY < tagHeight
            headerTop !== isTop
                ?
                setIsTop(false)
                :
                setIsTop(true)
        })
    }, [])






    const logoRef = React.createRef()



    return (
        <div className='home'>
            {/* <div className='header-container'>
                <p ref={logoRef} className='header' style={{ top: `${tagHeight}px` }}>HEADER</p>
            </div> */}
            <div ref={logoRef} id='logoId' className={isTop ? 'logo-container' : 'logo-container2'}>
                <figure className={`logo-figure ${shine}`} >
                    <img className={start} src={louCardWB} alt='logo' />
                </figure>
            </div>
        </div>
    )
}

export default Home