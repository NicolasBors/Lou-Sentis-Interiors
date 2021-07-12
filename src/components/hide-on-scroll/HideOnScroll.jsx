import React from 'react'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { useLocation } from 'react-router-dom'

const HideOnScroll = ({ children, window }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  const location = useLocation()

  const isProjectsPage = location.pathname.startsWith('/projets')

  return (
    <Slide appear={false} direction="down" in={isProjectsPage ? !trigger : true}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
