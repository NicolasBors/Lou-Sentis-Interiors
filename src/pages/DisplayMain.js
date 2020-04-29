import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import '../styles/DisplayMain.css'

import Duquesne from '../data/projects/Duquesne'
import IleDeLaReunion from '../data/projects/IleDeLaReunion'
import LaCoupole from '../data/projects/LaCoupole'
import LeRelaisDuLouvre from '../data/projects/LeRelaisDuLouvre'
import ShowroomDigital from '../data/projects/ShowroomDigital'

import Accessoires from '../data/collection/Accessoires'
import Assises from '../data/collection/Assises'
import Luminaires from '../data/collection/Luminaires'
import Meubles from '../data/collection/Meubles'

const DisplayMain = ({ view, match, history }) => {

    const links = view === 'RÉALISATION' ?
        [
            {
                title: Duquesne.title,
                image: Duquesne.image[0].src,
                linkUrl: '/duquesne'
            },
            {
                title: IleDeLaReunion.title,
                image: IleDeLaReunion.image[0].src,
                linkUrl: '/île-de-la-réunion'
            },
            {
                title: LaCoupole.title,
                image: LaCoupole.image[0].src,
                linkUrl: '/la-coupole'
            },
            {
                title: LeRelaisDuLouvre.title,
                image: LeRelaisDuLouvre.image[0].src,
                linkUrl: '/le-relais-du-louvre'
            },
            {
                title: ShowroomDigital.title,
                image: ShowroomDigital.image[0].src,
                linkUrl: '/showroom-digital'
            }
        ]
        :
        view === 'MOBILIER' ?
            [
                {
                    title: Accessoires.title,
                    image: Accessoires.image[0].src,
                    linkUrl: '/accessoires'
                },
                {
                    title: Assises.title,
                    image: Assises.image[0].src,
                    linkUrl: '/assises'

                },
                {
                    title: Luminaires.title,
                    image: Luminaires.image[0].src,
                    linkUrl: '/luminaires'

                },
                {
                    title: Meubles.title,
                    image: Meubles.image[0].src,
                    linkUrl: '/meubles'

                }
            ]
            : []

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [view])

    return (
        <div className='displaymain'>
            <div className='displaymain-content'>
                <div className='displaymain-container'>


                    <div className='displaymain-gallery'>
                        <div className='displaymain-title-container'>
                            <div className='displaymain-title'>
                                <h1>
                                    {`${view} —`}
                                </h1>
                                <div className='displaymain-description'>
                                    {view === 'RÉALISATION' ?
                                        <p>Projets architecturaux</p>
                                        :
                                        view === 'MOBILIER' ?
                                            <p>Collection d'éléments mobiliers</p>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                        {links.map((link, i) =>
                            <div className={'displaymain-image-container'} key={i} >
                                <div className='displaymain-inner-image-container'>
                                    <div className='displaymain-image-holder' >
                                        <div
                                            onClick={() => history.push(`${match.url}${link.linkUrl}`)}
                                        >
                                            <img className='displaymain-image-thumbnail' src={link.image} alt={link.title} />
                                            <div className='displaymain-image-title-container'>

                                                <span className='displaymain-image-title'>{link.title}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default withRouter(DisplayMain)