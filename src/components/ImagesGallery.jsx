import React, { useState, useEffect } from 'react'

import FullScreenBox from './FullScreenBox'

import '../styles/ImagesGallery.scss'

const ImagesGallery = ({ images, filteredImages, fullImages, setFullImages }) => {

    const [selectedImage, setSelectedImage] = useState(0)
    const [fullScreenBox, setFullScreenBox] = useState(false)
    const [fullConcatImages, setFullConcatImages] = useState(fullImages)

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
    }, [fullImages, images.length, selectedImage, filteredImages])
    

    const selectImage = (image) => {
        setFullImages(filteredImages.slice())
        setSelectedImage(filteredImages.indexOf(image))
    }

    return (
        <>
            <div id='images-grid'>
                {filteredImages.map((image, i) =>
                    <div className='image-container' key={i} >
                        <div className='inner-image-container'>
                            <div className='image-holder' >
                                <div onClick={() => {
                                    selectImage(image)
                                    setFullScreenBox(true)
                                }}>
                                    <img className='image-thumbnail' src={image.src} alt={image.caption} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {fullScreenBox ?
                filteredImages.length > 1 ?
                    <FullScreenBox multiple fullConcatImages={fullConcatImages} setFullScreenBox={setFullScreenBox} />
                    :
                    <FullScreenBox fullConcatImages={fullConcatImages} setFullScreenBox={setFullScreenBox} />
                :
                null
            }
        </>
    )
}

export default ImagesGallery