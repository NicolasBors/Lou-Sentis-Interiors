import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { selectMenuVisible } from '../redux/menu/menu.selectors'
import { selectDirectorySections, selectDirectorySubsections } from '../redux/directory/directory.selectors'

import BurgerIcon from './BurgerIcon'

import { toggleMenu, closeMenu } from '../redux/menu/menu.actions'

import scrollArrow from '../assets/scrollArrow.png'

import {
    MobileNavbarContainer,
    ItemContainer,
    Title,
    ArrowContainer,
    TitleContainer,
    SubItemContainer,
    SubItem
} from '../styles/MobileMenuStyles'

const MobileMenu = ({ sections, subSections, visible, toggleMenu, closeMenu, history, match }) => {

    const [subMenu1, setSubMenu1] = useState(false)
    const [subMenu2, setSubMenu2] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            closeMenu()
        })
    }, [closeMenu])

    return (
        <div>
            <BurgerIcon setSubMenu1={setSubMenu1} setSubMenu2={setSubMenu2} />
            <MobileNavbarContainer visible={visible}>
                {sections.map(({ id, ...sectionProps }) =>
                    (
                        <ItemContainer>
                            <TitleContainer
                                onClick={
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
                                <Title
                                    subMenu={id === 1 ? subMenu1 : id === 2 ? subMenu2 : undefined} >
                                    {sectionProps.title}
                                </Title>
                                {id === 1 ?
                                    <ArrowContainer subMenu={subMenu1} src={scrollArrow} alt='More'>
                                        <img src={scrollArrow} alt='More' />
                                    </ArrowContainer>
                                    :
                                    id === 2 ?
                                        <ArrowContainer subMenu={subMenu2} src={scrollArrow} alt='More'>
                                            <img src={scrollArrow} alt='More' />
                                        </ArrowContainer>
                                        :
                                        null}
                            </TitleContainer>
                            <SubItemContainer
                                subMenu={id === 1 ? subMenu1 : id === 2 ? subMenu2 : undefined}
                            >
                                {subSections.filter(subSection => subSection.section === sectionProps.title).map(
                                    ({ id, ...subSectionProps }) => (
                                        <SubItem
                                            onClick={
                                                () => {
                                                    toggleMenu()
                                                    history.push(`${match.url}${subSectionProps.linkUrl}`)
                                                }
                                            }
                                        >{subSectionProps.title}</SubItem>))
                                }
                            </SubItemContainer>
                        </ItemContainer>
                    )
                )
                }
            </MobileNavbarContainer>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    visible: selectMenuVisible,
    sections: selectDirectorySections,
    subSections: selectDirectorySubsections
})

const mapDispatchToProps = dispatch => ({
    toggleMenu: menu => dispatch(toggleMenu(menu)),
    closeMenu: menu => dispatch(closeMenu(menu))
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps)(
            MobileMenu))