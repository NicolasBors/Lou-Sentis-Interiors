import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { data } from "../data/data";

import {
  selectLinksRealisation,
  selectLinksMobilier,
} from "../redux/links/links.selectors";
import LinksGallery from "./LinksGallery";
import "../styles/LinksOverview.scss";

const findContent = (type, refId) => {
  const foundContent = data[type].pages.find((d) => d.id === refId);

  return foundContent;
};
const LinksOverview = ({ title, description, links, type }) => {
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
          {links.flatMap((link) => {
            const content = findContent(type, link.refId);

            if (content) {
              return (
                <LinksGallery
                  key={link.refId}
                  imageUrl={link.imageUrl}
                  title={content.name}
                  path={content.path}
                />
              );
            } else return [];
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
