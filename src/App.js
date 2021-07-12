import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Logo from './components/logo/Logo'
import HideOnScroll from './components/hide-on-scroll/HideOnScroll'

import Home from './pages/home/Home.jsx'
import { Toolbar, AppBar } from '@material-ui/core'
import Navbar from './components/navbar/Navbar'
import Information from './pages/information/Information'
import Todo from './pages/todo/Todo'

const App = () => {
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
          {/* <Route exact path="/realisations" render={() => <Realisation />} />
          <Route exact path="/collections" render={() => <Mobilier />} /> */}
          {/* {data['realisations'].map((realisation) => {
            return <Route path={realisation.path} render={() => <Project realisation={realisation} />} />
          })} */}
          <Route exact path="/projets" render={() => <Todo />} />
          <Route exact path="/information" render={() => <Information />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
