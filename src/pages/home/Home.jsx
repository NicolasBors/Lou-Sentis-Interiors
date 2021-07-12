import React, { useEffect } from 'react'

import HomeGallery from '../../components/home-gallery/HomeGallery'

import data from '../../data/data.json'

import './Home.scss'

const findContent = (type, refId) => {
  const foundContent = data[type].find((d) => d.id === refId)

  return foundContent
}

const Home = () => {
  const images = data.homeLinks
    .map((link) => {
      const content = findContent(link.type, link.refId)
      if (content) {
        return {
          title: content.name,
          href: content.path,
          url: link.imageUrl,
        }
      }
      return undefined
    })
    .filter(Boolean)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
      {/* {images?.length && <Gallery images={images} />}
      <div className="home-contact">
        <a href="mailTo:lousentis@lousentis-interiors.com">{contactMail}</a>
      </div> */}
      <HomeGallery />
    </div>
  )
}

export default Home
