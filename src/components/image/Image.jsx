import React, { useState } from 'react'
import './Image.scss'

const CLASS_NAME = 'Image'

const Image = ({ src, alt }) => {
  const [error, setError] = useState(false)

  const onImageLoadError = () => {
    setError(true)
  }

  if (error) {
    return (
      <div className={CLASS_NAME}>
        <img src="/images/title/not-found.png" alt={alt} />
      </div>
    )
  }

  return (
    <div className={CLASS_NAME}>
      <img src={src} alt={alt} onError={onImageLoadError} />
    </div>
  )
}

export default Image
