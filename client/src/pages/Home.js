import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import HomePictures from '../data/projects/HomePictures'
import '../styles/Home.css'

const Home = ({ history }) => {

    const images = HomePictures

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='home'>
            <div className='home-container'>
                <div className='recent-work'>
                    {images.map((image, i) =>
                        <div className={`image-container${image.id}`} key={i} >
                            <div className='inner-image-container'>
                                <div className='image-holder' >
                                    <div onClick={() => history.push(`${image.linkUrl}`)}>
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