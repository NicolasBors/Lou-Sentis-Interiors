import React, { useState, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './css/DisplayContent.css'

import closeBtn from '../assets/icons/close.png'
import slideArrow from '../assets/icons/slideArrow.png'
import downArrow from '../assets/downArrow.png'

const DisplayContent = props => {

    const images = props.content.image

    const [contentType, setContentType] = useState('')
    const [filteredImages, setFilteredImages] = useState(images.slice())
    const [fullImages, setFullImages] = useState(filteredImages.slice())
    const [selectedImage, setSelectedImage] = useState(0)
    const [fullConcatImages, setFullConcatImages] = useState(fullImages)
    const [showSingleBox, setShowSingleBox] = useState(false)
    const [showMultipleBox, setShowMultipleBox] = useState(false)
    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState('')
    const [filters, setFilters] = useState('Par catégorie')
    const [openFilters, setOpenFilters] = useState(false)

    const categories =
        props.view === 'ACCESSOIRES' ? ['Arts de la table', 'Coussins', 'Décoration', 'Miroirs', 'Portants', 'Tapis', 'Tissus', 'Vases et plantes']
            : props.view === 'ASSISES' ? ['Chaises', 'Fauteuils et canapés', 'Poufs']
                : props.view === 'LUMINAIRES' ? ['Appliques', 'Lampadaires', 'Lampes à poser', 'Suspensions']
                    : props.view === 'MEUBLES' ? ['Commodes', 'Étagères', 'Lits', "Tables basses et d'appoint", 'Tables à manger']
                        : ['']
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props.view])

    useEffect(() => (
        props.view === 'ACCESSOIRES' || props.view === 'ASSISES' || props.view === 'LUMINAIRES' || props.view === 'MEUBLES' ?
            setContentType('mobilier')
            :
            setContentType('réalisation')
    ), [props.view])

    useEffect(() => {
        setFilters('Par catégorie')
        setOpenFilters(false)
    }, [props.view])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

    useEffect(() => {
        filters !== 'Par catégorie' ?
            setFilteredImages(images.filter(image => image.categorie === filters))
            :
            setFilteredImages(images)
    }, [filters, images])

    useEffect(() => {
        for (let i = 1; i <= selectedImage; i++) {
            let movedImage = fullImages.shift()
            fullImages.push(movedImage)
        }
        filteredImages.length === 1 ? setFullConcatImages(fullImages) :
            filteredImages.length === 2 ? setFullConcatImages(fullImages.concat(fullImages).concat(fullImages).concat(fullImages)) :
                filteredImages.length === 3 ? setFullConcatImages(fullImages.concat(fullImages).concat(fullImages)) :
                    filteredImages.length >= 7 ? setFullConcatImages(fullImages) :
                        setFullConcatImages(fullImages.concat(fullImages))
        return () => {
        }
    }, [fullImages, images.length, selectedImage, filteredImages])

    const selectImage = (image) => {
        setFullImages(filteredImages.slice())
        setSelectedImage(filteredImages.indexOf(image))
    }

    const generateItems = () => {
        const generateItems = []
        for (let i = active - 2; i < active + 3; i++) {
            let index = i
            if (i < 0) {
                index = fullConcatImages.length + i
            } else if (i >= fullConcatImages.length) {
                index = i % fullConcatImages.length
            }
            const generateLevel = active - i
            generateItems.push(<Item key={index} id={fullConcatImages[index]} level={generateLevel} />)
        }
        return generateItems
    }


    const generateCaptions = () => {
        const generateCaptions = []
        for (let i = active - 2; i < active + 3; i++) {
            let index = i
            if (i < 0) {
                index = fullConcatImages.length + i
            } else if (i >= fullConcatImages.length) {
                index = i % fullConcatImages.length
            }
            const generateLevel = active - i
            generateCaptions.push(<Caption key={index} id={fullConcatImages[index]} level={generateLevel} />)
        }
        return generateCaptions
    }

    const moveLeft = () => {
        let newActive = active
        newActive--
        setActive(newActive < 0 ? fullConcatImages.length - 1 : newActive)
        setDirection('left')
    }

    const moveRight = () => {
        let newActive = active
        setActive((newActive + 1) % fullConcatImages.length)
        setDirection('right')
    }

    const handleKeyDown = event => {
        (showSingleBox === true || showMultipleBox === true) && event.keyCode === 37 ?
            moveLeft()
            : (showSingleBox === true || showMultipleBox === true) && event.keyCode === 39 ?
                moveRight()
                : console.log('key not allowed')
    }



    return (
        <div className={'displaycontent'} onClick={openFilters ? () => { setOpenFilters(false) } : null}>
            <div className='displaycontent-content'>
                <div className='displaycontent-container'>
                    <div className='displaycontent-gallery'>
                        <div className={`displaycontent-title ${contentType === 'mobilier' ? 'mobilier-title' : 'realisation-title'}`}>
                            <h1>{props.view}</h1>
                            {
                                props.view === 'ACCESSOIRES' || props.view === 'ASSISES' || props.view === 'LUMINAIRES' || props.view === 'MEUBLES' ?
                                    <div className='displaycontent-filters' onClick={() => setOpenFilters(!openFilters)}>
                                        <p>
                                            {filters}
                                        </p>
                                        <img className={openFilters ? 'displaycontent-top-arrow' : 'displaycontent-down-arrow'} src={downArrow} alt='' />

                                        <div className={openFilters ? 'displaycontent-open-filters' : 'displaycontent-close-filters'}>
                                            <p className='displaycontent-select-filter' onClick={() => setFilters('Par catégorie')}>Tout afficher</p>
                                            {categories.map((categorie, i) => (
                                                <p className='displaycontent-select-filter' onClick={() => setFilters(categorie)}>{categorie}</p>
                                            ))}
                                        </div>
                                    </div>
                                    :
                                    <span className='displaycontent-description'>{props.content.description}</span>
                            }
                        </div>
                        <div className='displaycontent-gallery'>
                            {filteredImages.map((image, i) =>
                                <div className='displaycontent-image-container' key={i} >
                                    <div className='displaycontent-inner-image-container'>
                                        <div className='displaycontent-image-holder' >
                                            <div onClick={() => {
                                                selectImage(image)
                                                filteredImages.length > 1 ? setShowMultipleBox(true) : setShowSingleBox(true)
                                            }}>
                                                <img className='displaycontent-image-thumbnail' src={image.src} alt={image.caption} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showMultipleBox ?
                <div className='carousel-container' tabIndex="0" onKeyDown={() => handleKeyDown()}>
                    <div id="carousel" className="carousel carousel-noselect">
                        <img src={slideArrow} className="arrow arrow-left" alt='left' onClick={moveLeft} />
                        <ReactCSSTransitionGroup
                            transitionName={direction}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
                            <div className='close-btn-container'>
                                <img className='image-close-btn' alt='close' src={closeBtn} onClick={() => {
                                    setShowMultipleBox(false)
                                    setActive(0)
                                }} />
                            </div>
                            {generateItems()}
                        </ReactCSSTransitionGroup>
                        <img src={slideArrow} className="arrow arrow-right" alt='right' onClick={moveRight} />
                    </div>
                    <div id="caption" className="carousel carousel-noselect">
                        {generateCaptions()}
                    </div>
                </div>
                :
                null}
            {showSingleBox ?
                <div className='carousel-container'>
                    <div id="carousel" className="carousel carousel-noselect">
                        <div className='close-btn-container'>
                            <img className='image-close-btn' alt='close' src={closeBtn} onClick={() => {
                                setShowSingleBox(false)
                            }} />
                        </div>
                        <div className='item level0'>
                            <img src={fullConcatImages[0].src} alt={fullConcatImages[0].caption} />
                        </div>
                    </div>
                    <div id="caption" className="carousel carousel-noselect">
                        <p className='caption levelx0'>{fullConcatImages[0].caption}</p>
                    </div>

                </div>
                :
                null}
        </div>

    )
}

const Item = props => {
    const className = 'item level' + props.level
    return (
        <div>
            <div className={className}>
                <img src={props.id.src} alt={props.id.caption} />
            </div>
        </div>
    )
}

const Caption = props => {
    const className = 'caption levelx' + props.level
    return (
        <div>
            <p className={className}>{props.id.caption}</p>
        </div>
    )
}

export default DisplayContent