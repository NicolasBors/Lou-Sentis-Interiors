import React, { useState, useEffect } from 'react'
import './css/DisplayMain.css'
import Intreatl from './projects/Intreatl'

const DisplayMain = props => {
    // const images = props.brand.image
    const images = Intreatl.image

    const links =
        [
            {
                title: 'ACCESSOIRES',
                image: Intreatl.image[0].src,
            },
            {
                title: 'LUMINAIRE',
                image: Intreatl.image[1].src,
            },
            {
                title: 'MOBILIER',
                image: Intreatl.image[2].src,
            },
            {
                title: 'TENDANCES',
                image: Intreatl.image[3].src,
            },
        ]

        

    // useEffect(() => {
    //     window.scrollTo(0, props.headHeight)
    // }, [])

    return (
        <div className='displaymain' onClick={props.menu ? props.setMenu(false) : null}>
            <div className='displaymain-content'>
                <div className='displaymain-container'>


                    <div className='displaymain-gallery'>
                        <div className='displaymain-title-container'>
                            <div className='displaymain-title'>
                                <h1>
                                    {`${props.view} —`}
                                </h1>
                                <div className='displaymain-description'>
                                    <p>
                                        This is a collection of bla bla bla bla bla bla bla bla bla bla.
                                    </p>
                                    {props.view === 'MOBILIER' ?

                                        <div></div>
                                        : null}
                                </div>
                            </div>
                        </div>
                        {links.map((link, i) =>
                            <div className={'displaymain-image-container'} key={i} >
                                <div className='displaymain-inner-image-container'>
                                    <div className='displaymain-image-holder' >
                                        <div onClick={() => props.setView(link.title)}>
                                            <img className='displaymain-image-thumbnail' src={link.image} alt={link.title} />
                                            <div className='displaymain-image-title-container'>

                                                <span className='displaymain-image-title'>{link.title}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >

        </div >

    )
}

export default DisplayMain