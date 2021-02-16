import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { toggleMenu } from "../../redux/menu/menu.actions";
import louCardWB from "../../assets/logos/LOGO BLANC.png";

const Start = ({ visible, history, match, dispatch }) => {
  const classes = {
    logoContainerAfer: {
      position: "fixed",
      left: "50%",
      top: 100,
      transform: "translate(-50%, -50%)",
    },
    logoAfter: {
      height: 120,
      overflow: "hidden",
      cursor: "pointer",
      filter: "invert(1)",
    },
  };

  return (
    <div id="logoId" style={classes.logoContainerAfer}>
      <figure>
        <img
          style={classes.logoAfter}
          src={louCardWB}
          alt="logo"
          onClick={
            visible
              ? () => {
                  dispatch(toggleMenu());
                  history.push(`${match.url}`);
                }
              : () => {
                  history.push(`${match.url}`);
                }
          }
        />
      </figure>
    </div>
  );
};

const mapStateToProps = ({ menu: { visible } }) => ({
  visible,
});

export default withRouter(connect(mapStateToProps)(Start));
