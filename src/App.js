import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import Start from './components/Start'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DisplayMain from './components/DisplayMain'
import DisplayContent from './components/DisplayContent'
import ContactForm from './components/ContactForm'

import Duquesne from './components/projects/Duquesne'
import LaCoupole from './components/projects/LaCoupole'
import LeRelaisDuLouvre from './components/projects/LeRelaisDuLouvre'
import IleDeLaReunion from './components/projects/IleDeLaReunion'
import ShowroomDigital from './components/projects/ShowroomDigital'

import Accessoires from './components/collection/Accessoires'
import Assises from './components/collection/Assises'
import Luminaires from './components/collection/Luminaires'
import Meubles from './components/collection/Meubles'

const App = ({visible}) => {

  const [start, setStart] = useState(true)
  const [opacity, setOpacity] = useState(false)

  return (<div className="App">

    <Start
      start={start} setStart={setStart} setOpacity={setOpacity}
    />
    {start ?
      null
      :
      <div className={opacity ? 'after-start' : 'before-start'}>
        <Navbar />
        <div className={visible ? 'fixed-background' : ''}>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/réalisation' render={() => <DisplayMain view={'RÉALISATION'} />} />
            <Route exact path='/mobilier' render={() => <DisplayMain view={'MOBILIER'} />} />
            <Route path='/réalisation/duquesne' render={() => <DisplayContent content={Duquesne} />} />
            <Route path='/réalisation/la-coupole' render={() => <DisplayContent content={LaCoupole} />} />
            <Route path='/réalisation/le-relais-du-louvre' render={() => <DisplayContent content={LeRelaisDuLouvre} />} />
            <Route path='/réalisation/île-de-la-réunion' render={() => <DisplayContent content={IleDeLaReunion} />} />
            <Route path='/réalisation/showroom-digital' render={() => <DisplayContent content={ShowroomDigital} />} />
            <Route path='/mobilier/accessoires' render={() => <DisplayContent content={Accessoires} />} />
            <Route path='/mobilier/assises' render={() => <DisplayContent content={Assises} />} />
            <Route path='/mobilier/luminaires' render={() => <DisplayContent content={Luminaires} />} />
            <Route path='/mobilier/meubles' render={() => <DisplayContent content={Meubles} />} />
            <Route path='/contact' render={() => <ContactForm />} />
          </Switch>
        </div>
      </div>
    }
  </div>)
}

const mapStateToProps = ({ menu: { visible } }) => ({
  visible
})

export default connect(mapStateToProps)(App)
