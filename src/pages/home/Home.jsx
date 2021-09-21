import React from 'react'

import HomeGallery from '../../components/home-gallery/HomeGallery'

import { homePages } from '../../data/data.json'
import Incoming from '../incoming/Incoming'

import './Home.scss'

const Home = () => {
  const homePage = homePages?.[0]

  if (!homePage) {
    return <Incoming />
  }

  return (
    <div className="home">
      <HomeGallery homePage={homePages?.[0]} />
    </div>
  )
}

export default Home
