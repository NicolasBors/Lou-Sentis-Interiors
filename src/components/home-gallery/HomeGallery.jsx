import React from 'react'
import Image from '../image/Image'
import { Link } from 'react-router-dom'
import './HomeGallery.scss'

const HomeImage = (props) => {
  return (
    <div className="home-image-container">
      <Image {...props} />
    </div>
  )
}

const Blocs = ({ blocs }) =>
  blocs.map(({ url, id, label, href }) => (
    <div className={`bloc ${url ? 'has-img' : ''}`} key={id}>
      {url ? (
        <Link to={href} title={label}>
          <HomeImage alt={label || 'Image'} src={url} />
        </Link>
      ) : (
        <></>
      )}
    </div>
  ))

const HomeGallery = ({ topImagesMap, middleImagesMap, bottomImagesMap, screen }) => {
  const buildBlocsContents = (imagesMap, screen) => {
    const emptyObjectsArray = new Array(14).fill({})

    return emptyObjectsArray.reduce((acc, cur, index) => {
      const position = index.toString()
      const imageByPosition = imagesMap[screen][position]

      return acc.concat([imageByPosition || cur])
    }, [])
  }

  const topBlocs = buildBlocsContents(topImagesMap, screen)
  const midBlocs = buildBlocsContents(middleImagesMap, screen)
  const bottomBlocs = buildBlocsContents(bottomImagesMap, screen)

  return (
    <div className="HomeGallery">
      <div className="top-grid grid-base-layout">
        <Blocs blocs={topBlocs} />
      </div>
      <div className="mid-grid grid-base-layout">
        <Blocs blocs={midBlocs} />
      </div>
      <div className="bottom-grid grid-base-layout">
        <Blocs blocs={bottomBlocs} />
      </div>
    </div>
  )
}

export default HomeGallery
