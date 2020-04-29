import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import BurgerIcon from './BurgerIcon.jsx'

import { toggleMenu, closeMenu } from '../redux/menu/menu.actions'

import scrollArrow from '../assets/scrollArrow.png'

import '../styles/MenuBurger.css'

const MenuBurger = ({ sections, subSections, visible, toggleMenu, closeMenu, history, match }) => {

    const [subMenu1, setSubMenu1] = useState(false)
    const [subMenu2, setSubMenu2] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            closeMenu()
        })
    }, [closeMenu])

    return (
        <>
            <BurgerIcon setSubMenu1={setSubMenu1} setSubMenu2={setSubMenu2} />
            <div className={visible ? 'burger-background' : ''}>
                <div className={visible ? "open-menu-burger menu-burger" : "menu-burger"}>
                    {sections.map(({ id, ...sectionProps }) =>
                        (
                            <div className={`burger-item-container${id}`}>
                                <div className='burger-title-container' onClick={
                                    sectionProps.title === 'RÉALISATION' ?
                                        subMenu1 ?
                                            () => setSubMenu1(false)
                                            :
                                            () => setSubMenu1(true)
                                        :
                                        sectionProps.title === 'MOBILIER' ?
                                            subMenu2 ?
                                                () => setSubMenu2(false)
                                                :
                                                () => setSubMenu2(true)
                                            :
                                            () => { toggleMenu(); history.push(`${match.url}${sectionProps.linkUrl}`); }
                                }>
                                    <p className='burger-menu-item'

                                    >{sectionProps.title}</p>
                                    {id === 1 ?
                                        <img className={subMenu1 ? 'burger-top-arrow' : 'burger-down-arrow'} src={scrollArrow} alt='More' />
                                        :
                                        id === 2 ?
                                            <img className={subMenu2 ? 'burger-top-arrow' : 'burger-down-arrow'} src={scrollArrow} alt='More' />
                                            :
                                            null}
                                </div>
                                <div className={
                                    id === 1 ?
                                        subMenu1 ?
                                            `burger-item-sub-container${id}-open`
                                            :
                                            `burger-item-sub-container${id}`
                                        :
                                        id === 2 ?
                                            subMenu2 ?
                                                `burger-item-sub-container${id}-open`
                                                :
                                                `burger-item-sub-container${id}`
                                            :
                                            `burger-item-sub-container${id}`
                                } >
                                    {subSections.filter(subSection => subSection.section === sectionProps.title).map(
                                        ({ id, ...subSectionProps }) => (
                                            <p className='burger-item-sub'
                                                onClick={
                                                    () => { toggleMenu(); history.push(`${match.url}${subSectionProps.linkUrl}`); }
                                                }
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

const mapStateToProps = ({ menu: { visible } }) => ({
    visible
})

const mapDispatchToProps = dispatch => ({
    toggleMenu: menu => dispatch(toggleMenu(menu)),
    closeMenu: menu => dispatch(closeMenu(menu))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger)