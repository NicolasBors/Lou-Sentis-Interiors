import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import APP_ROUTES from '../../constants/APP_ROUTES'
import { projects } from '../../data/data.json'
import './MenuItem.scss'

const projectsSorter = ({ date: dateA }, { date: dateB }) => dateB.localeCompare(dateA)

const MenuItem = ({ href, label }) => {
  const location = useLocation()
  const history = useHistory()
  const isOnSection = location.pathname.startsWith(href)
  const isInformation = label === APP_ROUTES.INFORMATION.label
  const hasProjects = Boolean(projects?.length)
  const hasProjectsSubItems = label === APP_ROUTES.PROJETS.label && hasProjects

  return (
    <div
      className={`MenuItem${hasProjectsSubItems ? ' projects-select' : ''}${
        isInformation && hasProjects ? ' information-hide' : ''
      }`}
    >
      <span className={`menu-item${isOnSection ? ' bold-item' : ''}`} onClick={() => history.push(href)}>
        {label}
      </span>
      {hasProjectsSubItems && (
        <div className="projects-container">
          {projects.sort(projectsSorter).map(({ id, name, path }) => (
            <Link key={id} to={path} title={name} className="menu-subitem">
              <span className="menu-subitem">{name.toLocaleUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuItem
