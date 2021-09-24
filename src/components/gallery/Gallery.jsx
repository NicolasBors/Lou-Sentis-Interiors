import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import './Gallery.scss'
import GalleryImage from './GalleryImage'

const Gallery = ({ images }) => {
  if (!images?.length) {
    return <></>
  }

  const options = {
    settings: {
      autoplaySpeed: 5000,
      transitionSpeed: 900,
    },
    // couleurs et polices du thème ?
    // caption: {
    //   captionColor: theme.darkTextColor,
    //   captionFontFamily: theme.bodyFont,
    // },
  }
  const customCaptions = images.map(({ id, label }) => ({ id, caption: label }))

  return (
    <SRLWrapper options={options} customCaptions={customCaptions}>
      <div className="Gallery">
        <div className="gallery-container">
          {images.map((image) => (
            <GalleryImage key={image.id} {...image} />
          ))}
        </div>
      </div>
    </SRLWrapper>
  )
}

export default Gallery
