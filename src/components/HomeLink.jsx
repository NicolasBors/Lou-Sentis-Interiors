import React from "react";
import { withRouter } from "react-router-dom";

import "../styles/HomeLink.scss";

const HomeLink = ({ history, key, path, imageUrl, label }) => (
  <div className="home-link" key={key}>
    <div className={`link image-container`}>
      <div className="inner-image-container">
        <div className="image-holder">
          <div onClick={() => history.push(path)}>
            <img className="image-thumbnail" src={imageUrl} alt={label} />
            <div className="title-container">
              <span className="title">{label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(HomeLink);
