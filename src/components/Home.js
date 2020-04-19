import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import HomePictures from './projects/HomePictures'
import './css/Home.css'

const Home = ({ view, history }) => {

    const images = HomePictures

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [view])

    return (
        <div className='home'>
            <div className='home-container'>
                {/* <div className='home-presentation'>
                    <h2>{'Short description of your work'.toUpperCase()}</h2>
                    <p>{'More detailed description of your offer and projects'}</p>
                </div> */}
                <div className='recent-work'>
                    <h2>
                        CRÉATIONS RÉCENTES
                    </h2>
                    {images.map((image, i) =>
                        <div className='image-container' key={i} >
                            <div className='inner-image-container'>
                                <div className='image-holder' >


                                    <div
                                    onClick={() => history.push(`${image.linkUrl}`)}
                                    >
                                        <img className='image-thumbnail' src={image.src} alt={image.title} />
                                        <div className='image-title-container'>

                                            <span className='image-title'>{image.title}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='home-contact'>
                    <a href='mailTo:lousentis@lousentis-interiors.com'>{'lousentis@lousentis-interiors.com'}</a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home)