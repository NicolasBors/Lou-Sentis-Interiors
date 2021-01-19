import React, { useEffect } from "react";

import HomeContact from "../components/HomeContact";
import HomeLink from "../components/HomeLink";

import { data } from "../data/data";

import "../styles/Home.scss";

const findContent = (type, refId) => {
  const foundContent = data[type].pages.find((d) => d.id === refId);

  return foundContent;
};

const Home = () => {
  const links = data["home"].links;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="gallery">
        {links.flatMap((link, index) => {
          const content = findContent(link.type, link.refId);
          if (content) {
            return (
              <HomeLink
                link={link}
                key={index}
                label={content.name}
                path={content.path}
                imageUrl={link.imageUrl}
              />
            );
          } else return [];
        })}
      </div>
      <HomeContact />
    </div>
  );
};

export default Home;
