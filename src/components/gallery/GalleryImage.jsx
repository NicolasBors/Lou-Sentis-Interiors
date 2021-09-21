import React from 'react'
import Image from '../image/Image'
import './GalleryImage.scss'

const GalleryImage = ({ id, url, label }) => {
  return (
    <div className="GalleryImage">
      <a data-attribute="SRL" href={url} title={label}>
        <Image key={id} src={url} alt={label} />
      </a>
    </div>
  )
}

export default GalleryImage
