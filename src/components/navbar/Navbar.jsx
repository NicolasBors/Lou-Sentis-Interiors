import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDirectorySections,
  selectDirectorySubsections,
} from "../../redux/directory/directory.selectors";

import "./Navbar.scss";

const Navbar = ({ sections, subSections, history }) => (
  <div className="navbar">
    {sections.map(({ id, name }) => (
      <div className="item-sub-container">
        <div className={`item-container${id}`}>
          <p className="main-item" onClick={() => history.push(`/${id}`)}>
            {name}
          </p>
          <div className={`sub-item-container${id}`}>
            {subSections
              .filter((subSection) => subSection.sectionId === id)
              .map(({ name, path }) => (
                <p
                  className="sub-item"
                  onClick={() => {
                    history.push(path);
                  }}
                >
                  {name}
                </p>
              ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  subSections: selectDirectorySubsections,
});

export default withRouter(connect(mapStateToProps)(Navbar));
