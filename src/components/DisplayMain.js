import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './css/DisplayMain.css'

import Duquesne from './projects/Duquesne'
import IleDeLaReunion from './projects/IleDeLaReunion'
import LaCoupole from './projects/LaCoupole'
import ShowroomDigital from './projects/ShowroomDigital'

import Intreatl from './projects/Intreatl'

const DisplayMain = ({view, match, history}) => {
    
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
                title: ShowroomDigital.title,
                image: ShowroomDigital.image[0].src,
                linkUrl: '/showroom-digital'
            }
        ]
        :
        view === 'MOBILIER' ?
            [
                {
                    title: 'ACCESSOIRES',
                    image: Intreatl.image[0].src,
                },
                {
                    title: 'LUMINAIRE',
                    image: Intreatl.image[1].src,
                },
                {
                    title: 'MOBILIER',
                    image: Intreatl.image[2].src,
                },
                {
                    title: 'TENDANCES',
                    image: Intreatl.image[3].src,
                }
            ]
            : []

            console.log(history);
            



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [view])

    return (
        <div className='displaymain' 
        // onClick={menu ? props.setMenu(false) : null}
        >
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