import React, { useState, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import closeBtn from '../assets/icons/close.png'
import slideArrow from '../assets/icons/slideArrow.png'

import '../styles/FullScreenBox.scss'

const FullScreenBox = ({ multiple, setFullScreenBox, fullConcatImages }) => {

    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState('')

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

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
        event.keyCode === 37 ?
            moveLeft()
            : event.keyCode === 39 ?
                moveRight()
                : console.log('key not allowed')
    }

    return (
        <div id='full-screen-box' tabIndex="0" onKeyDown={multiple ? () => handleKeyDown() : null}>
            <div className="slider noselect">
                {multiple ?
                    <>
                        <img src={slideArrow} className="arrow" id="arrow-left" alt='left' onClick={moveLeft} />
                        <ReactCSSTransitionGroup
                            transitionName={direction}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
                            <div className='close-btn-container'>
                                <img alt='close' src={closeBtn} onClick={() => {
                                    setFullScreenBox(false)
                                    setActive(0)
                                }} />
                            </div>
                            {generateItems()}
                        </ReactCSSTransitionGroup>
                        <img src={slideArrow} className="arrow" id="arrow-right" alt='right' onClick={moveRight} />
                    </>
                    :
                    <>
                        <div className='close-btn-container'>
                            <img className='image-close-btn' alt='close' src={closeBtn} onClick={() => {
                                setFullScreenBox(false)
                            }} />
                        </div>
                        <div className='item level0'>
                            <img src={fullConcatImages[0].src} alt={fullConcatImages[0].caption} />
                        </div>
                    </>
                }
            </div>
            <div id="caption" className="slider noselect">
                {multiple ?
                    generateCaptions()
                    :
                    <p className='caption levelx0'>{fullConcatImages[0].caption}</p>
                }
            </div>
        </div >
    )
}

const Item = ({ id, level }) => {
    const className = 'item level' + level
    return (
        <div>
            <div className={className}>
                <img src={id.src} alt={id.caption} />
            </div>
        </div>
    )
}

const Caption = ({ id, level }) => {
    const className = 'caption levelx' + level
    return (
        <div>
            <p className={className}>{id.caption}</p>
        </div>
    )
}

export default FullScreenBox