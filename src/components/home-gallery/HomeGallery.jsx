import React from 'react'
import { shuffleArray } from '../../utils/Array'
import Image from '../image/Image'
import './HomeGallery.scss'

const HomeImage = (props) => {
  return (
    <div className="home-image-container">
      <Image {...props} />
    </div>
  )
}

const Blocs = ({ blocs }) =>
  blocs.map(({ url, id, label }) => (
    <div className={`bloc ${url ? 'has-img' : ''}`} key={id}>
      {url ? <HomeImage alt={label || 'Image'} src={url} /> : <></>}
    </div>
  ))

const HomeGallery = ({ homePage }) => {
  if (!homePage?.topImages?.length && !homePage?.middleImages?.length && !homePage?.bottomImages?.length) {
    return <></>
  }

  const buildBlocsContents = (images) => {
    const imagesByPosition = images?.filter((_, index) => index <= 13)
    const emptyBlocksLength = 14 - imagesByPosition.length

    return shuffleArray(imagesByPosition.concat(new Array(emptyBlocksLength).fill({})))
  }

  const topBlocs = buildBlocsContents(homePage.topImages)
  const midBlocs = buildBlocsContents(homePage.middleImages)
  const bottomBlocs = buildBlocsContents(homePage.bottomImages)

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
