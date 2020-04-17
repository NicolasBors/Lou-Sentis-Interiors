import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import './css/Navbar.css'

import MenuBurger from './MenuBurger'
import louCardTop from '../assets/logos/LOGO BLANC haut.png'

const Navbar = ({menu, setMenu, match, history}) => {

    const [seeMenu, setSeeMenu] = useState(false)

    const [sections, setSections] = useState([
        {
            title: 'PROJETS',
            id: 1,
            linkUrl: 'projets'
        },
        {
            title: 'COLLECTION',
            id: 2,
            linkUrl: 'collection'
        },
        {
            title: 'CONTACT',
            id: 3,
            linkUrl: 'contact'
        }
    ])
    const [subSections, setSubsections] = useState([
        {
            title: 'HÔTELS',
            id: 1,
            section: 'PROJETS',
            linkUrl: 'projets/hôtels'
        },
        {
            title: 'PARTICULIERS',
            id: 2,
            section: 'PROJETS',
            linkUrl: 'projets/particuliers'
        },
        {
            title: 'PROJETS ÉTUDIANTS',
            id: 3,
            section: 'PROJETS',
            linkUrl: 'projets/projets étudiants'
        },
        {
            title: 'ACCESSOIRES',
            id: 4,
            section: 'COLLECTION',
            linkUrl: 'collection/accessoires'
        },
        {
            title: 'LUMINAIRE',
            id: 5,
            section: 'COLLECTION',
            linkUrl: 'collection/luminaire'
        },
        {
            title: 'MOBILIER',
            id: 6,
            section: 'COLLECTION',
            linkUrl: 'collection/mobilier'
        },
        {
            title: 'TENDANCES',
            id: 7,
            section: 'COLLECTION',
            linkUrl: 'collection/tendances'
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
                <div className='header-container'>
                    <div className='header-logo' onClick={() => history.push(`${match.url}`)}>
                        <img src={louCardTop} alt='Lou Sentis' />
                    </div>
                    {seeMenu ?
                        < MenuBurger 
                        menu={menu}
                        setMenu={setMenu}
                        />
                        :
                        <div className='navbar'>
                            {sections.map(({ id, ...sectionProps }) =>
                                (
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
                                )
                            )
                            }
                        </div>}
                </div>
            </div >

            
        </div>
    )
}

export default withRouter(Navbar)