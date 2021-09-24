import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import louCardWB from '../../assets/logos/LOGO.png'

const Logo = () => {
  const history = useHistory()
  const location = useLocation()

  const classes = {
    logoContainerAfer: {
      position: 'fixed',
      left: '37.5%',
      top: 100,
      transform: 'translate(-50%, -50%)',
    },
    logoAfter: {
      height: 120,
      overflow: 'hidden',
      cursor: 'pointer',
    },
  }

  const onLogoClick = () => (location.pathname === '/' ? undefined : history.push('/'))

  return (
    <div id="logoId" style={classes.logoContainerAfer}>
      <figure>
        <img style={classes.logoAfter} src={louCardWB} alt="logo" onClick={onLogoClick} />
      </figure>
    </div>
  )
}

export default Logo
