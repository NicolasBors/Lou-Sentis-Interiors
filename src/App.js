import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Test from './components/Test'
import Carousel from './components/Carousel'
import Mobilier from './components/Mobilier'
import MenuBurger from './components/MenuBurger'
import ContactForm from './components/ContactForm'


const App = () => {

  const [content, setContent] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [view, setView] = useState('carousel')

  return (<div className="App">
    <Home setContent={setContent} isTop={isTop} setIsTop={setIsTop} setView={setView} />
    {view === 'carousel' ? <Carousel content={content} isTop={isTop} /> : null}
    {view === 'mobilier' ? <Mobilier content={content} /> : null}
    {view === 'contact' ? <ContactForm content={content} /> : null}
  </div>)
}

export default App
