import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Carousel from './components/Carousel'
import Mobilier from './components/Mobilier'
import ContactForm from './components/ContactForm'

const App = () => {

  const [start, setStart] = useState(true)
  const [opacity, setOpacity] = useState(false)

  const [content, setContent] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [view, setView] = useState('home')
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

    view === 'home' ?  <Home opacity={opacity} />
    :
    view === 'carousel' ? <Carousel content={content} isTop={isTop} />
    :
    view === 'mobilier' ? <Mobilier content={content} headHeight={headHeight} />
    :
    view === 'contact' ? <ContactForm content={content} headHeight={headHeight} />
    : null
}
  </div>)
}

export default App
