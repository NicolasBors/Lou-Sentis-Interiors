import React from "react";
import { withRouter } from "react-router-dom";

import "../styles/LinksGallery.scss";

const LinksGallery = ({ history, path, imageUrl, title }) => (
  <div className="links-gallery">
    <div className="image-holder">
      <div onClick={() => history.push(path)}>
        <img className="image-thumbnail" src={imageUrl} alt={title} />
        <div className="title-container">
          <span className="title">{title}</span>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(LinksGallery);
