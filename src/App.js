import React, { useState } from 'react'
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

  const [content, setContent] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [view, setView] = useState('HOME')
  const [headHeight, setHeadHeight] = useState(484)
  const [menu, setMenu] = useState(false)  

  return (<div className="App">
    {start ?
      <Start start={start} setStart={setStart} setOpacity={setOpacity}  />
    :
    <Navbar opacity={opacity} setView={setView} menu={menu} setMenu={setMenu} />
    
}
{start ?
null
:

    view === 'HOME' ?  <Home opacity={opacity} />
    :
    view === 'COLLECTION' || view === 'PROJETS' ?  <DisplayMain view={view} setView={setView} />
    :
    view === 'LUMINAIRE' || view === 'MOBILIER' || view === 'ACCESSOIRES' || view === 'TENDANCES' || view === 'HÔTELS' || view === 'PARTICULIERS' || view === 'PROJETS ÉTUDIANTS' ? <DisplayContent view={view} />
    :
    view === 'CONTACT' ? <ContactForm />
    : null
}
  </div>)
}

export default App
