import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './css/Carousel.css'

const Carousel = () => {
    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState('')

    const generateItems = () => {
        const generateItems = []
        for (let i = active - 2; i < active + 3; i++) {
            let index = i
            if (i < 0) {
                index = items.length + i
            } else if (i >= items.length) {
                index = i % items.length
            }
            const generateLevel = active - i
            generateItems.push(<Item key={index} id={items[index]} level={generateLevel} />)
        }
        return generateItems
    }

    const moveLeft = () => {
        let newActive = active
        newActive--
        setActive(newActive < 0 ? items.length - 1 : newActive)
        setDirection('left')
    }

    const moveRight = () => {
        let newActive = active
        setActive((newActive + 1) % items.length)
        setDirection('right')
    }
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
            <div id="carousel" className="carousel carousel-noselect">
                <div className="arrow arrow-left" onClick={moveLeft}><i className="fi-arrow-left"></i></div>
                <ReactCSSTransitionGroup
                    transitionName={direction}>
                    {generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={moveRight}><i className="fi-arrow-right"></i></div>
            </div>
    )
}

const Item = props => {
    const className = 'item level' + props.level
    return (
        <div className={className}>
            {props.id}
        </div>
    )
}

export default Carousel