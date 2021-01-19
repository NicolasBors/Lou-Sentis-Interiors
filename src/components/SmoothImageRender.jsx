import React, { useState, useEffect } from "react";
import "../styles/SmoothImageRender.scss";

const SmoothImageRender = ({
  src,
  alt = "notFound",
  objectFit = "contain",
  images,
  lastLoaded,
  setLastLoaded,
}) => {
  const [isValidSrc, setIsValidSrc] = useState(!!src);

  useEffect(() => {
    setLastLoaded(false);
  }, [images, setLastLoaded]);

  return (
    <div className="smooth-image-wrapper">
      {isValidSrc ? (
        <img
          className={`smooth-image img-${lastLoaded ? "visible" : "hidden"}`}
          style={{ objectFit }}
          src={src}
          alt={alt}
          onLoad={() => {
            if (src === images[images.length - 1].src) setLastLoaded(true);
            if (src === images[images.length - 1].src)
              console.log("je suis chargée");
          }}
          onError={() => setIsValidSrc(false)}
        />
      ) : (
        <div className="smooth-no-image">{alt}</div>
      )}
    </div>
  );
};

export default SmoothImageRender;
