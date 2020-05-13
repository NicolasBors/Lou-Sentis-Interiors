import React from 'react'
import { withRouter } from 'react-router-dom'

import '../styles/HomeLink.scss'

const HomeLink = ({ image, history }) => (
    <div className='home-link'>
        <div className={`link image-container${image.id}`}>
            <div className='inner-image-container'>
                <div className='image-holder' >
                    <div
                        onClick={() => history.push(`${image.linkUrl}`)}
                    >
                        <img className='image-thumbnail' src={image.src} alt={image.title} />
                        <div className='title-container'>
                            <span className='title'>{image.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(HomeLink)