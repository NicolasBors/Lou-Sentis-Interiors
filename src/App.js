import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Start from './components/Start'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DisplayMain from './components/DisplayMain'
import DisplayContent from './components/DisplayContent'
import ContactForm from './components/ContactForm'

const App = () => {

  const [start, setStart] = useState(true)
  const [opacity, setOpacity] = useState(false)
  const [menu, setMenu] = useState(false)  

  return (<div className="App">
    {start ?
      <Start 
      start={start} setStart={setStart} setOpacity={setOpacity} 
      />
      :
      <div className={opacity ? 'after-start' : 'before-start'}>
        <Navbar menu={menu} setMenu={setMenu}/>
        <Switch>
          <Route exact path='/' render={(props) => <Home opacity={opacity} view={'HOME'} />} />
          <Route exact path='/collection' render={(props) => <DisplayMain view={'COLLECTION'} />} />
          <Route exact path='/projets' render={(props) => <DisplayMain view={'PROJETS'} />} />
          <Route path='/collection/accessoires' render={(props) => <DisplayContent view={'ACCESSOIRES'} />} />
          <Route path='/collection/luminaire' render={(props) => <DisplayContent view={'LUMINAIRE'} />} />
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
