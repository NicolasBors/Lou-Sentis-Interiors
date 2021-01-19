import React from "react";
import { connect } from "react-redux";

import { toggleMenu } from "../redux/menu/menu.actions";

import {
  BurgerContainer,
  BurgerBar,
  MediumBurgerBarContainer,
  MediumBurgerBar,
} from "../styles/BurgerIconStyles";

const BurgerIcon = ({ visible, toggleMenu, setSubMenu1, setSubMenu2 }) => (
  <BurgerContainer
    onClick={() => {
      toggleMenu();
      setSubMenu1(false);
      setSubMenu2(false);
    }}
  >
    <BurgerBar visible={visible} />
    <MediumBurgerBarContainer>
      <MediumBurgerBar visible={visible} />
      <MediumBurgerBar visible={visible} inverted />
    </MediumBurgerBarContainer>
    <BurgerBar visible={visible} />
  </BurgerContainer>
);

const mapStateToProps = ({ menu: { visible } }) => ({
  visible,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (menu) => dispatch(toggleMenu(menu)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerIcon);
