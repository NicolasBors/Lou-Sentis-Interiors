import React, { useState, useEffect } from "react";

import FullScreenBox from "./FullScreenBox";
import SmoothImageRender from "./SmoothImageRender";

import { ImageContainer } from "../styles/ImageContainerStyles";
import "../styles/ImagesGallery.scss";

const ImagesGallery = ({ images }) => {
  return (
    <div id="images-grid">
      {images.map((image, i) => (
        <ImageContainer className="image-container" key={i}>
          <div className="inner-image-container">
            <div className="image-holder">
              <img
                style={{ objectFit: "contain" }}
                src={image.url}
                alt={image.label}
              />
            </div>
          </div>
        </ImageContainer>
      ))}
    </div>
  );
};

export default ImagesGallery;
