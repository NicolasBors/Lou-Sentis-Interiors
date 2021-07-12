import React from "react";
import { withRouter } from "react-router-dom";

import "./Thumbnail.scss";

const Thumbnail = ({ history, key, href, imageUrl, title }) => (
  <div className="thumbnail" key={key}>
    <div className="image-container" onClick={() => href && history.push(href)}>
      <img
        className={`image${href ? " image-link" : ""}`}
        src={imageUrl}
        alt={title}
        title={title}
      />
      {title && (
        <div className="title-container">
          <span className="title">{title}</span>
        </div>
      )}
    </div>
  </div>
);

export default withRouter(Thumbnail);
