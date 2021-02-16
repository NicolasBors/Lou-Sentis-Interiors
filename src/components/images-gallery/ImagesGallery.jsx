import React, { useState, useEffect } from "react";

// import FullScreenBox from "./FullScreenBox";
// import SmoothImageRender from "./SmoothImageRender";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

import { ImageContainer } from "../../styles/ImageContainerStyles";
import "./ImagesGallery.scss";

const options = {
  settings: {
    autoplaySpeed: 5000,
    transitionSpeed: 500,
  },
  // couleurs et polices du thème
  caption: {
    captionColor: "white",
    captionFontFamily: "Avenir",
  },
};

const ImagesGallery = ({ images }) => {
  console.log(images);
  return (
    <SimpleReactLightbox>
      <div id="images-grid">
        <SRLWrapper
          options={options}
          customCaptions={images.map((image) => ({
            id: image.id,
            caption: image.caption || "",
          }))}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
            <Masonry>
              {images.map((image, i) => (
                <ImageContainer className="image-container" key={i}>
                  <div className="inner-image-container">
                    <div className="image-holder">
                      <img
                        style={{ objectFit: "contain" }}
                        src={image.url}
                        alt={image.caption}
                      />
                    </div>
                  </div>
                </ImageContainer>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
};

export default ImagesGallery;
