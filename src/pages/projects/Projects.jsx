import React from 'react'
import { projects } from '../../data/data.json'
import Project from '../project/Project'

const Projects = () => {
  return projects.map((project) => <Project {...project} />)
}

export default Projects
