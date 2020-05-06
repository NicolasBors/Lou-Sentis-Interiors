import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
    selectLinksRealisation,
    selectLinksMobilier
} from '../redux/links/links.selectors'
import LinksGallery from './LinksGallery'

import '../styles/LinksOverview.scss'

const LinksOverview = ({ title, description, linksRealisation, linksMobilier }) => {

    const links = title === 'RÉALISATION' ? linksRealisation : linksMobilier

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [title])

    return (
        <div className='links-overview'>
            <div className='section-container'>
                <div className='head'>
                    <h1>
                        {`${title} —`}
                    </h1>
                    <div className='description-container'>
                        <p>{description}</p>
                    </div>
                    {
                        links.map(link =>
                            <LinksGallery key={link.id} link={link} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    linksMobilier: selectLinksMobilier,
    linksRealisation: selectLinksRealisation
})

export default connect(mapStateToProps)(LinksOverview)