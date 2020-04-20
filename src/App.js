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

  return (<div className="App">

    <Start
      start={start} setStart={setStart} setOpacity={setOpacity}
    />
    {start ?
      null
      :
      <div className={opacity ? 'after-start' : 'before-start'}>
        <Navbar menu={menu} setMenu={setMenu} />
        <Switch>
          <Route exact path='/' render={(props) => <Home view={'HOME'} />} />
          <Route exact path='/réalisation' render={(props) => <DisplayMain view={'RÉALISATION'} setView={setView} />} />
          <Route exact path='/mobilier' render={(props) => <DisplayMain view={'MOBILIER'} setView={setView} />} />
          <Route path='/réalisation/duquesne' render={(props) => <DisplayContent view={'Duquesne'} content={Duquesne} />} />
          <Route path='/réalisation/la-coupole' render={(props) => <DisplayContent view={'La Coupole'} content={LaCoupole} />} />
          <Route path='/réalisation/île-de-la-réunion' render={(props) => <DisplayContent view={'Île de la Réunion'} content={IleDeLaReunion} />} />
          <Route path='/réalisation/showroom-digital' render={(props) => <DisplayContent view={'Showroom Digital'} content={ShowroomDigital} />} />
          <Route path='/mobilier/accessoires' render={(props) => <DisplayContent view={'Accessoires'} content={Accessoires} />} />
          <Route path='/mobilier/assises' render={(props) => <DisplayContent view={'Assises'} content={Assises} />} />
          <Route path='/mobilier/luminaires' render={(props) => <DisplayContent view={'Luminaires'} content={Luminaires} />} />
          <Route path='/mobilier/meubles' render={(props) => <DisplayContent view={'Meubles'} content={Meubles} />} />


          <Route path='/collection/mobilier' render={(props) => <DisplayContent view={'MOBILIER'} />} />
          <Route path='/collection/tendances' render={(props) => <DisplayContent view={'TENDANCES'} />} />
          <Route path='/projets/hôtels' render={(props) => <DisplayContent view={'HÔTELS'} />} />
          <Route path='/projets/particuliers' render={(props) => <DisplayContent view={'PARTICULIERS'} />} />
          <Route path='/projets/projets étudiants' render={(props) => <DisplayContent view={'PROJETS ÉTUDIANTS'} />} />
          <Route path='/contact' render={(props) => <ContactForm {...props} view={'CONTACT'} />} />
        </Switch>
      </div>
    }
  </div>)
}

export default App
