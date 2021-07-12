import React from 'react'
import { useHistory, useLocation } from 'react-router'
import APP_ROUTES from '../../constants/APP_ROUTES'
import './Navbar.scss'

const Navbar = () => {
  const history = useHistory()
  const location = useLocation()

  console.log(location)

  const isOnSection = (href) => location.pathname.startsWith(href)

  return (
    <div className="Navbar grid-base-layout">
      <div className="navbar-left" />
      <div className="navbar-right">
        <div className="menu">
          {Object.values(APP_ROUTES).map(({ href, label }) => (
            <span
              key={href}
              className={`menu-item${isOnSection ? ' bold-item' : ''}`}
              onClick={() => history.push(href)}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
