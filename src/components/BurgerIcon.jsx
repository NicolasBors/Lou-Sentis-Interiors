import React from 'react'
import { connect } from 'react-redux'

import { toggleMenu } from '../redux/menu/menu.actions'

import '../styles/BurgerIcon.scss'

const BurgerIcon = ({ visible, toggleMenu, setSubMenu1, setSubMenu2 }) => (
    <div className='burger-icon'
        onClick={() => {
            toggleMenu()
            setSubMenu1(false)
            setSubMenu2(false)
        }}>
        <div className={visible ? 'opened' : ''}>
            <div className="bar1"></div>
            <div className="mbar">
                <div className="mbar1"></div>
                <div className="mbar2"></div>
            </div>
            <div className="bar3"></div>
        </div >
    </div >
)

const mapStateToProps = ({ menu: { visible } }) => ({
    visible
})

const mapDispatchToProps = dispatch => ({
    toggleMenu: menu => dispatch(toggleMenu(menu))
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerIcon)