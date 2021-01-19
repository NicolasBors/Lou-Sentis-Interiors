import React, { useEffect } from "react";
import "../styles/ContentOverview.scss";
import ImagesGallery from "../components/ImagesGallery";

const Project = ({ content, images }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);
  return (
    <div id="content-overview">
      <div id="overview">
        <div id="gallery-container">
          <div className={`title realisation`}>
            <h1>{content.name}</h1>
            <span className="description">{content.description}</span>
          </div>
          <ImagesGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default Project;
