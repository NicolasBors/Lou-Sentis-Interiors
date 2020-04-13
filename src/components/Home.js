import React, {useState} from 'react'
import Intreatl from './projects/Intreatl'
import './css/Home.css'

const Home = props => {

    const images = Intreatl.image

    return (
        <div className={props.opacity ? 'home' : 'all-before'}>
            <div className='home-container'>
                <div className='home-presentation'>
                    <h2>{'Short description of your work'.toUpperCase()}</h2>
                    <p>{'More detailed description of your offer and projects'}</p>
                </div>
                <div className='recent-work'>
                    <h2>
                        CRÉATIONS RÉCENTES
                    </h2>
                    {images.map((image, i) =>
                        <div className='image-container' key={i} >
                            <div className='inner-image-container'>
                                <div className='image-holder' >


                                    <div 
                                    // onClick={() => props.setContent(image.title)}
                                    >
                                        <img className='image-thumbnail' src={image.src} alt={image.caption} />
                                        <div className='image-title-container'>

                                            <span className='image-title'>{image.caption}</span>
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

export default Home