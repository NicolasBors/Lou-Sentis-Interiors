import React, { useEffect } from 'react'

import HomeContact from '../components/HomeContact'
import HomeLink from '../components/HomeLink'

import HomePictures from '../data/MainPictures'

import '../styles/Home.scss'

const Home = () => {

    const images = HomePictures

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='home'>
            <div className='gallery'>
                {images.map(image =>
                    <HomeLink image={image} />
                )}
            </div>
            <HomeContact />
        </div >
    )
}

export default Home