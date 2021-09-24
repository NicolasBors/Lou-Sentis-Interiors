import React from 'react'
import APP_ROUTES from '../../constants/APP_ROUTES'
import './Navbar.scss'
import MenuItem from '../menu-item/MenuItem'

const Navbar = () => (
  <div className="Navbar grid-base-layout">
    <div className="grid-left-container" />
    <div className="grid-right-container">
      <div className="menu">
        {Object.values(APP_ROUTES).map((props) => (
          <MenuItem key={props.href} {...props} />
        ))}
      </div>
    </div>
  </div>
)

export default Navbar
