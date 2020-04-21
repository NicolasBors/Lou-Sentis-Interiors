import React, { useEffect } from 'react'

import './css/MenuBurger.css'

const MenuBurger = ({ sections, subSections, menu, setMenu, history, match }) => {

    const toggleMenu = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMenu(false)
        })
    })

    return (
        <>
            <div className={menu ? "open-menu-container menu-container" : "menu-container"} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="mbar">
                    <div className="mbar1"></div>
                    <div className="mbar2"></div>
                </div>
                <div className="bar3"></div>
            </div>
            <div onClick={() => toggleMenu()} className={menu ? 'burger-background' : ''}>
                <div className={menu ? "open-menu-burger menu-burger" : "menu-burger"}>
                    {sections.map(({ id, ...sectionProps }) =>
                        (
                            <div className={`burger-item-container${id}`}>
                                <p className='burger-menu-item'
                                    onClick={() => history.push(`${match.url}${sectionProps.linkUrl}`)}
                                >{sectionProps.title}</p>
                                <div className={`buerger-item-sub-container${id}`} >
                                    {subSections.filter(subSection => subSection.section === sectionProps.title).map(
                                        ({ id, ...subSectionProps }) => (
                                            <p className='burger-item-sub'
                                                onClick={() => history.push(`${match.url}${subSectionProps.linkUrl}`)}
                                            >{subSectionProps.title}</p>))
                                    }
                                </div>
                            </div>
                        )
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default MenuBurger