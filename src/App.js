import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Logo from './components/logo/Logo'
import HideOnScroll from './components/hide-on-scroll/HideOnScroll'

import Home from './pages/home/Home.jsx'
import { Toolbar, AppBar } from '@material-ui/core'
import Navbar from './components/navbar/Navbar'
import Information from './pages/information/Information'
import { projects } from './data/data.json'
import Project from './pages/project/Project'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={'App'}>
      <HideOnScroll>
        <AppBar elevation={0}>
          <Toolbar style={{ minHeight: 200, backgroundColor: 'white' }}>
            <Logo />
          </Toolbar>
          <Navbar />
        </AppBar>
      </HideOnScroll>
      <div className={'main-container'}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* NON */}
          <Route exact path="/information" render={() => <Information />} />
          {Boolean(projects?.length) &&
            projects.map(({ id, path, ...props }) => (
              <Route key={id} exact path={path} render={() => <Project {...props} />} />
            ))}
        </Switch>
      </div>
    </div>
  )
}

export default App
