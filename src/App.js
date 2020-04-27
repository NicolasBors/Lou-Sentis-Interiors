import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';

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

const App = () => {

  const [view, setView] = useState('HOME')
  const [start, setStart] = useState(true)
  const [opacity, setOpacity] = useState(false)
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (<div className="App">

    <Start
      start={start} setStart={setStart} setOpacity={setOpacity} menu={menu} toggleMenu={toggleMenu}
    />
    {start ?
      null
      :
      <div className={opacity ? 'after-start' : 'before-start'}>
        <Navbar menu={menu} setMenu={setMenu} toggleMenu={toggleMenu} />
        <Switch>
          <Route exact path='/' render={() => <Home view={'HOME'} />} />
          <Route exact path='/réalisation' render={() => <DisplayMain view={'RÉALISATION'} setView={setView} />} />
          <Route exact path='/mobilier' render={() => <DisplayMain view={'MOBILIER'} setView={setView} />} />
          <Route path='/réalisation/duquesne' render={() => <DisplayContent view={'DUQUESNE'} content={Duquesne} />} />
          <Route path='/réalisation/la-coupole' render={() => <DisplayContent view={'LA COUPOLE'} content={LaCoupole} />} />
          <Route path='/réalisation/le-relais-du-louvre' render={() => <DisplayContent view={'LE RELAIS DU LOUVRE'} content={LeRelaisDuLouvre} />} />
          <Route path='/réalisation/île-de-la-réunion' render={() => <DisplayContent view={'ÎLE DE LA RÉUNION'} content={IleDeLaReunion} />} />
          <Route path='/réalisation/showroom-digital' render={() => <DisplayContent view={'SHOWROOM DIGITAL'} content={ShowroomDigital} />} />
          <Route path='/mobilier/accessoires' render={() => <DisplayContent view={'ACCESSOIRES'} content={Accessoires} />} />
          <Route path='/mobilier/assises' render={() => <DisplayContent view={'ASSISES'} content={Assises} />} />
          <Route path='/mobilier/luminaires' render={() => <DisplayContent view={'LUMINAIRES'} content={Luminaires} />} />
          <Route path='/mobilier/meubles' render={() => <DisplayContent view={'MEUBLES'} content={Meubles} />} />
          <Route path='/contact' render={() => <ContactForm view={'CONTACT'} />} />
        </Switch>
      </div>
    }
  </div>)
}

export default App
