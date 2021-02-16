import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import data from "../../data/data.json";

import {
  selectLinksRealisation,
  selectLinksMobilier,
} from "../../redux/links/links.selectors";
import LinksGallery from "../links-gallery/LinksGallery";
import "./LinksOverview.scss";

const LinksOverview = ({ title, description, type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="links-overview">
      <div className="section-container">
        <div className="head">
          <h1>{`${title} —`}</h1>
          <div className="description-container">
            <p>{description}</p>
          </div>
          {data[type].map((content) => {
            return (
              <LinksGallery
                key={content.id}
                imageUrl={content.images[0]?.url}
                title={content.name}
                path={content.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  linksMobilier: selectLinksMobilier,
  linksRealisation: selectLinksRealisation,
});

export default connect(mapStateToProps)(LinksOverview);
