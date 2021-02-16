import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectMenuVisible } from "../../redux/menu/menu.selectors";
import {
  selectDirectorySections,
  selectDirectorySubsections,
} from "../../redux/directory/directory.selectors";

import BurgerIcon from "../burger-icon/BurgerIcon";

import { toggleMenu, closeMenu } from "../../redux/menu/menu.actions";

import scrollArrow from "../../assets/icons/scrollArrow.png";

import {
  MobileNavbarContainer,
  ItemContainer,
  Title,
  ArrowContainer,
  TitleContainer,
  SubItemContainer,
  SubItem,
} from "./MobileMenuStyles";

const MobileMenu = ({
  sections,
  subSections,
  visible,
  toggleMenu,
  closeMenu,
  history,
  match,
}) => {
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      closeMenu();
    });
  }, [closeMenu]);

  return (
    <div>
      <BurgerIcon setSubMenu1={setSubMenu1} setSubMenu2={setSubMenu2} />
      <MobileNavbarContainer visible={visible}>
        {sections.map(({ id, name }) => (
          <ItemContainer>
            <TitleContainer
              onClick={
                name === "realisations"
                  ? subMenu1
                    ? () => setSubMenu1(false)
                    : () => setSubMenu1(true)
                  : name === "collections"
                  ? subMenu2
                    ? () => setSubMenu2(false)
                    : () => setSubMenu2(true)
                  : () => {
                      toggleMenu();
                      history.push(`/${id}`);
                    }
              }
            >
              <Title
                subMenu={
                  id === "realisations"
                    ? subMenu1
                    : id === "collections"
                    ? subMenu2
                    : undefined
                }
              >
                {name}
              </Title>
              {id === "realisations" ? (
                <ArrowContainer subMenu={subMenu1} src={scrollArrow} alt="More">
                  <img src={scrollArrow} alt="More" />
                </ArrowContainer>
              ) : id === "collections" ? (
                <ArrowContainer subMenu={subMenu2} src={scrollArrow} alt="More">
                  <img src={scrollArrow} alt="More" />
                </ArrowContainer>
              ) : null}
            </TitleContainer>
            <SubItemContainer
              subMenu={id === 1 ? subMenu1 : id === 2 ? subMenu2 : undefined}
            >
              {subSections
                .filter((subSection) => subSection.sectionId === id)
                .map(({ name, path }) => (
                  <SubItem
                    onClick={() => {
                      toggleMenu();
                      history.push(path);
                    }}
                  >
                    {name}
                  </SubItem>
                ))}
            </SubItemContainer>
          </ItemContainer>
        ))}
      </MobileNavbarContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  visible: selectMenuVisible,
  sections: selectDirectorySections,
  subSections: selectDirectorySubsections,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (menu) => dispatch(toggleMenu(menu)),
  closeMenu: (menu) => dispatch(closeMenu(menu)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MobileMenu)
);
