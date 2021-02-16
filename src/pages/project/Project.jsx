import React, { useEffect } from "react";
import "../../styles/ContentOverview.scss";
import ImagesGallery from "../../components/images-gallery/ImagesGallery";

const Project = ({ realisation }) => {
  const { images } = realisation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [realisation]);

  return (
    <div id="content-overview">
      <div id="overview">
        <div id="gallery-container">
          <div className={`title realisation`}>
            <h1>{realisation.name}</h1>
            <span className="description">{realisation.description}</span>
          </div>
          <ImagesGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default Project;
