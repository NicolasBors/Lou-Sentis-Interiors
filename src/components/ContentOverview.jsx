import React, { useState, useEffect } from 'react'

import ImagesGallery from './ImagesGallery'

import downArrow from '../assets/downArrow.png'

import '../styles/ContentOverview.scss'

const ContentOverview = ({ content, project, collection }) => {

    const images = content.image
    const oddWidth = content.oddWidth
    const evenWidth = content.evenWidth

    const [filteredImages, setFilteredImages] = useState(images.slice())
    const [fullImages, setFullImages] = useState(filteredImages.slice())
    const [filters, setFilters] = useState('Par catégorie')
    const [openFilters, setOpenFilters] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [content])

    useEffect(() => {
        setFilters('Par catégorie')
        setOpenFilters(false)
    }, [content])

    useEffect(() => {
        filters !== 'Par catégorie' ?
            setFilteredImages(images.filter(image => image.categorie === filters))
            :
            setFilteredImages(images)
    }, [filters, images])

    return (
        <div id='content-overview' onClick={openFilters ? () => { setOpenFilters(false) } : null}>
            <div id='overview'>
                <div id='gallery-container'>
                    <div className={`title ${project ? 'realisation' : 'mobilier'}`}>
                        <h1>{content.title}</h1>
                        {
                            !project ?
                                <div className='filters' onClick={() => setOpenFilters(!openFilters)}>
                                    <p>
                                        {filters}
                                    </p>
                                    <img className={openFilters ? 'top-arrow' : 'down-arrow'} src={downArrow} alt='' />

                                    <div className={openFilters ? 'open-filters' : 'close-filters'}>
                                        <p className='select-filter' onClick={() => setFilters('Par catégorie')}>Tout afficher</p>
                                        {content.categories.map((categorie, i) => (
                                            <p className='select-filter' onClick={() => setFilters(categorie)}>{categorie}</p>
                                        ))}
                                    </div>
                                </div>
                                :
                                <span className='description'>{content.description}</span>
                        }
                    </div>
                    <ImagesGallery filteredImages={filteredImages} images={images} fullImages={fullImages} setFullImages={setFullImages} project={project} oddWidth={oddWidth} evenWidth={evenWidth} />
                </div>
            </div>
        </div>
    )
}

export default ContentOverview