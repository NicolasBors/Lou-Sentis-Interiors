import React from 'react'
import louCardWB from '../../assets/logos/LOGO.png'

const Logo = () => {
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

  return (
    <div id="logoId" style={classes.logoContainerAfer}>
      <figure>
        <img style={classes.logoAfter} src={louCardWB} alt="logo" />
      </figure>
    </div>
  )
}

export default Logo
