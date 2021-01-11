import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
    selectDirectorySections,
    selectDirectorySubsections
} from '../redux/directory/directory.selectors'

import '../styles/Navbar.scss'

const Navbar = ({ sections, subSections, history, match }) => (
    < div className='navbar' >
        {
            sections.map(({ id, ...sectionProps }) =>
                (
                    <div className='item-sub-container'>
                        <div className={`item-container${id}`}>
                            <p className='main-item'
                                onClick={() =>
                                    history.push(`${match.url}${sectionProps.linkUrl}`)}
                            >{sectionProps.title}</p>
                            <div className={`sub-item-container${id}`} >
                                {subSections.filter(subSection => subSection.section === sectionProps.title).map(
                                    ({ id, ...subSectionProps }) => (
                                        <p className='sub-item'
                                            onClick={() => {
                                                history.push(`${match.url}${subSectionProps.linkUrl}`)
                                            }}
                                        >{subSectionProps.title}</p>)
                                )}
                            </div>
                        </div>
                    </div>
                )
            )
        }
    </div >
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
    subSections: selectDirectorySubsections
})

export default withRouter(
    connect(mapStateToProps)(
            Navbar))