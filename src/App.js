import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Test from './components/Test'
import Carousel from './components/Carousel'

const App = () => {

  const [content, setContent] = useState(false)
  const [isTop, setIsTop] = useState(true)

  return (<div className="App">
    <Home setContent={setContent} isTop={isTop} setIsTop={setIsTop}/>
    {/* <Test /> */}
    <Carousel content={content} isTop={isTop}/>
  </div>)
}


export default App
