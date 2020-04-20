import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './css/Navbar.css'

import MenuBurger from './MenuBurger'

const Navbar = ({ menu, setMenu, match, history }) => {

    const [seeMenu, setSeeMenu] = useState(false)

    const [sections, setSections] = useState([
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
    const [subSections, setSubsections] = useState([
        {
            title: 'Duquesne',
            id: 1,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/duquesne'
        },
        {
            title: 'Hôtel Sacha',
            id: 2,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/hôtel-sacha'
        },
        {
            title: 'Île de La Réunion',
            id: 3,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/île-de-la-réunion'
        },
        {
            title: 'La Coupole',
            id: 4,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/la-coupole'
        },
        {
            title: 'Le Relais du Louvre',
            id: 5,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/le-relais-du-louvre'
        },
        {
            title: 'Showroom Digital',
            id: 6,
            section: 'RÉALISATION',
            linkUrl: 'réalisation/showroom-digital'
        },
        {
            title: 'Accessoires',
            id: 7,
            section: 'MOBILIER',
            linkUrl: 'mobilier/accessoires'
        },
        {
            title: 'Assises',
            id: 8,
            section: 'MOBILIER',
            linkUrl: 'mobilier/assises'
        },
        {
            title: 'Luminaires',
            id: 9,
            section: 'MOBILIER',
            linkUrl: 'mobilier/luminaires'
        },
        {
            title: 'Meubles',
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
        let currentWidth = (window.innerWidth < 800);
        currentWidth ?
            setSeeMenu(true) :
            setSeeMenu(false)
    }

    return (
        <div>
            <div className='header' >
                {/* <div className='header-logo' onClick={() => history.push(`${match.url}`)}>
                        <img src={louCardTop} alt='Lou Sentis' />
                    </div> */}
                {seeMenu ?
                    < MenuBurger
                        menu={menu}
                        setMenu={setMenu}
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