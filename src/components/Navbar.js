import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './css/Navbar.css'

import MenuBurger from './MenuBurger'

const Navbar = ({ toggleMenu, match, history }) => {

    const [seeMenu, setSeeMenu] = useState(false)

    const [sections] = useState([
        {
            title: 'RÉALISATION',
            id: 1,
            linkUrl: 'réalisation'
        },
        {
            title: 'MOBILIER',
            id: 2,
            linkUrl: 'mobilier'
        },
        {
            title: 'INFORMATION',
            id: 3,
            linkUrl: 'information'
        },
        {
            title: 'CONTACT',
            id: 4,
            linkUrl: 'contact'
        }
    ])

    const [subSections] = useState([
        {
            title: 'DUQUESNE',
            id: 1,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/duquesne'
        },
        {
            title: 'HÔTEL SACHA',
            id: 2,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/hôtel-sacha'
        },
        {
            title: 'ÎLE DE LA RÉUNION',
            id: 3,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/île-de-la-réunion'
        },
        {
            title: 'LA COUPOLE',
            id: 4,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/la-coupole'
        },
        {
            title: 'LE RELAIS DU LOUVRE',
            id: 5,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/le-relais-du-louvre'
        },
        {
            title: 'SHOWROOM DIGITAL',
            id: 6,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/showroom-digital'
        },
        {
            title: 'ACCESSOIRES',
            id: 7,
            section: 'MOBILIER',
            linkUrl: 'mobilier/accessoires'
        },
        {
            title: 'ASSISES',
            id: 8,
            section: 'MOBILIER',
            linkUrl: 'mobilier/assises'
        },
        {
            title: 'LUMINAIRES',
            id: 9,
            section: 'MOBILIER',
            linkUrl: 'mobilier/luminaires'
        },
        {
            title: 'MEUBLES',
            id: 10,
            section: 'MOBILIER',
            linkUrl: 'mobilier/meubles'
        }
    ])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize()
        })
    }, [])

    useEffect(() => {
        setSize()
    }, [])

    const setSize = () => {
        let currentWidth = (window.innerWidth < 900);
        currentWidth ?
            setSeeMenu(true) :
            setSeeMenu(false)
    }

    return (
        <div>
            <div className='header' >
                {seeMenu ?
                    < MenuBurger
                        sections={sections}
                        subSections={subSections}
                        toggleMenu={toggleMenu}
                        history={history}
                        match={match}
                    />
                    :
                    <div className='navbar'>
                        {sections.map(({ id, ...sectionProps }) =>
                            (
                                <div className='navbar-item-sub-container'>
                                    <div className={`navbar-item-container${id}`}>
                                        <p className='navbar-main-item'
                                            onClick={() => history.push(`${match.url}${sectionProps.linkUrl}`)}
                                        >{sectionProps.title}</p>
                                        <div className={`navbar-item-sub-container${id}`} >
                                            {subSections.filter(subSection => subSection.section === sectionProps.title).map(
                                                ({ id, ...subSectionProps }) => (
                                                    <p className='navbar-item-sub'
                                                        onClick={() => history.push(`${match.url}${subSectionProps.linkUrl}`)}

                                                    >{subSectionProps.title}</p>)
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                        }
                    </div>}
            </div>
        </div >
    )
}

export default withRouter(Navbar)