import React, { useState, useEffect } from "react";

import MobileMenu from "../mobile-menu/MobileMenu";
import Navbar from "../navbar/Navbar";

import "./Header.scss";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innterWidth);

  useEffect(() => {
    const checkUpdate = () => {
      const currentWidth = window.innerWidth;

      if (windowWidth !== currentWidth) {
        setWindowWidth(currentWidth);
      }
    };
    checkUpdate();

    let onResizeTimeout;
    const onResize = () => {
      if (onResizeTimeout) {
        clearTimeout(onResizeTimeout);
      }
      onResizeTimeout = setTimeout(checkUpdate, 100);
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (onResizeTimeout) {
        clearTimeout(onResizeTimeout);
      }
      window.removeEventListener("resize", onResize);
    };
  }, [windowWidth]);

  return (
    <div className="header">
      {windowWidth < 900 ? <MobileMenu /> : <Navbar />}
    </div>
  );
};

export default Header;
