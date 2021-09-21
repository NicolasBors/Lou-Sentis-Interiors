import React from 'react'
import Incoming from '../incoming/Incoming'
import Gallery from '../../components/gallery/Gallery'
import './Project.scss'

const Project = ({ name, description = '', images = [] }) => {
  if (!name) {
    return <Incoming />
  }

  return (
    <div className="Project">
      <div className="head">
        <h1>{name}</h1>
        <span>{description}</span>
      </div>
      <Gallery images={images} />
    </div>
  )
}

export default Project
