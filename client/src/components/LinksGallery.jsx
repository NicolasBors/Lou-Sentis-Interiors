import React from 'react'
import { withRouter } from 'react-router-dom'

import '../styles/LinksGallery.scss'

const LinksGallery = ({ link, match, history }) => (
    <div className='links-gallery'>
        <div className='image-holder' >
            <div
                onClick={() => history.push(`${match.url}${link.linkUrl}`)}
            >
                <img className='image-thumbnail' src={link.image} alt={link.title} />
                <div className='title-container'>
                    <span className='title'>{link.title}</span>
                </div>
            </div>

        </div>
    </div>
)

export default withRouter(LinksGallery)