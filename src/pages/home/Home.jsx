import React, { useEffect } from "react";

import HomeContact from "../../components/home-contact/HomeContact";
import HomeLink from "../../components/home-link/HomeLink";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import data from "../../data/data.json";

import "./Home.scss";

const findContent = (type, refId) => {
  const foundContent = data[type].find((d) => d.id === refId);

  return foundContent;
};

const Home = () => {
  const links = data.homeLinks;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="gallery">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
          <Masonry>
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
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <HomeContact />
    </div>
  );
};

export default Home;
