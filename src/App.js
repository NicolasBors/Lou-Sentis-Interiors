import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Carousel from './components/Carousel'
import Mobilier from './components/Mobilier'
import ContactForm from './components/ContactForm'

const App = () => {

  const [content, setContent] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [view, setView] = useState('carousel')
  const [headHeight, setHeadHeight] = useState(484)
  const [menu, setMenu] = useState(false)

  return (<div className="App">
    <Home setContent={setContent} isTop={isTop} setIsTop={setIsTop} setView={setView} headHeight={headHeight} setHeadHeight={setHeadHeight} menu={menu} setMenu={setMenu}/>
    {view === 'carousel' ? <Carousel content={content} isTop={isTop} /> : null}
    {view === 'mobilier' ? <Mobilier content={content} headHeight={headHeight} /> : null}
    {view === 'contact' ? <ContactForm content={content} headHeight={headHeight} /> : null}
  </div>)
}

export default App
