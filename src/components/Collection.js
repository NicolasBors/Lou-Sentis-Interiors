import React, { useState, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import closeBtn from '../assets/icons/close.png'
import slideArrow from '../assets/icons/slideArrow.png'

import './css/Collection.css'
import downArrow from '../assets/downArrow.png'
import Intreatl from './projects/Intreatl'

const Collection = props => {
    // const images = props.brand.image
    const images = Intreatl.image

    const [fullImages, setFullImages] = useState(images.slice())
    const [selectedImage, setSelectedImage] = useState(0)
    const [fullConcatImages, setFullConcatImages] = useState(fullImages)
    const [showSingleBox, setShowSingleBox] = useState(false)
    const [showMultipleBox, setShowMultipleBox] = useState(false)
    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState('')
    const [filters, setFilters] = useState('FILTRER')
    const [openFilters, setOpenFilters] = useState(false)

    // useEffect(() => {
    //     window.scrollTo(0, props.headHeight)
    // }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

    useEffect(() => {
        for (let i = 1; i <= selectedImage; i++) {
            let movedImage = fullImages.shift()
            fullImages.push(movedImage)
        }
        images.length === 1 ? setFullConcatImages(fullImages) :
            images.length === 2 ? setFullConcatImages(fullImages.concat(fullImages).concat(fullImages).concat(fullImages)) :
                images.length === 3 ? setFullConcatImages(fullImages.concat(fullImages).concat(fullImages)) :
                    images.length >= 7 ? setFullConcatImages(fullImages) :
                        setFullConcatImages(fullImages.concat(fullImages))
        return () => {
        }
    }, [fullImages, images.length, selectedImage])

    const selectImage = (image) => {
        setFullImages(images.slice())
        setSelectedImage(images.indexOf(image))
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
        return generateItems;
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
        return generateCaptions;
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
        <div className={'collection'} onClick={openFilters ? () => setOpenFilters(false) : null, props.menu ? props.setMenu(false) : null}>
            <div className='collection-content'>
                <div className='collection-container'>


                    <div className='collection-gallery'>
                        <div className='collection-title'>
                            <h1>
                                {props.view}
                            </h1>
                            <div className='collection-filters' onClick={() => setOpenFilters(!openFilters)}>
                                <p>
                                    {filters}
                                </p>
                                <img className={openFilters ? 'collection-top-arrow' : 'collection-down-arrow'} src={downArrow} alt='' />
                                {props.view === 'MOBILIER' ?

                                    <div className={openFilters ? 'collection-open-filters' : 'collection-close-filters'}>

                                        <p className='collection-select-filter' onClick={() => setFilters('FILTRER')}>
                                            TOUT AFFICHER
                            </p>
                                        <p className='collection-select-filter' onClick={() => setFilters('CHAISES')}>
                                            CHAISES
                            </p>
                                        <p className='collection-select-filter' onClick={() => setFilters('CANAPÉS')}>
                                            CANAPÉS
                            </p>
                                        <p className='collection-select-filter' onClick={() => setFilters('LAMPES')}>
                                            LAMPES
                            </p>
                                        <p className='collection-select-filter' onClick={() => setFilters('TABLES')}>
                                            TABLES
                            </p>

                                    </div>
                                    : null}
                            </div>
                        </div>
                        {images.map((image, i) =>
                            <div className='collection-image-container' key={i} >
                                <div className='collection-inner-image-container'>
                                    <div className='collection-image-holder' >
                                        <div onClick={() => {
                                            selectImage(image)
                                            images.length > 1 ? setShowMultipleBox(true) : setShowSingleBox(true)
                                        }}>
                                            <img className='collection-image-thumbnail' src={image.src} alt={image.caption} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
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

export default Collection