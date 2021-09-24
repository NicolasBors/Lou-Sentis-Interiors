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
      <div className="project-head-container grid-base-layout">
        <div className="grid-left-container" />
        <div className="grid-right-container">
          <div className="head">
            <h1>{name.toLocaleUpperCase()}</h1>
            <span>{description}</span>
          </div>
        </div>
      </div>
      <Gallery images={images} />
    </div>
  )
}

export default Project
