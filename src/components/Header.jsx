import React, { useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

import "../styles/Header.scss";

const Header = () => {
  const [seeMenu, setSeeMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize();
    });
  }, []);

  useEffect(() => {
    setSize();
  }, []);

  const setSize = () => {
    let currentWidth = window.innerWidth < 900;
    currentWidth ? setSeeMenu(true) : setSeeMenu(false);
  };

  return <div className="header">{seeMenu ? <MobileMenu /> : <Navbar />}</div>;
};

export default Header;
