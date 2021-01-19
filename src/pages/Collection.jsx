import React, { useState, useEffect } from "react";

import downArrow from "../assets/icons/downArrow.png";
import ImagesGallery from "../components/ImagesGallery";
import "../styles/ContentOverview.scss";

const Collection = ({ content, images }) => {
  const [filters, setFilters] = useState("Par catégorie");
  const [openFilters, setOpenFilters] = useState(false);
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);

  useEffect(() => {
    setFilters("Par catégorie");
    setOpenFilters(false);
  }, [content]);

  useEffect(() => {
    filters !== "Par catégorie"
      ? setFilteredImages(images.filter((image) => image.categorie === filters))
      : setFilteredImages(images);
  }, [filters, images]);

  return (
    <div
      id="content-overview"
      onClick={
        openFilters
          ? () => {
              setOpenFilters(false);
            }
          : null
      }
    >
      <div id="overview">
        <div id="gallery-container">
          <div className={`title mobilier`}>
            <h1>{content.name}</h1>
            <div
              className="filters"
              onClick={() => setOpenFilters(!openFilters)}
            >
              <p>{filters}</p>
              <img
                className={openFilters ? "top-arrow" : "down-arrow"}
                src={downArrow}
                alt=""
              />

              <div className={openFilters ? "open-filters" : "close-filters"}>
                <p
                  className="select-filter"
                  onClick={() => setFilters("Par catégorie")}
                >
                  Tout afficher
                </p>
                {content.categories.map((categorie, i) => (
                  <p
                    className="select-filter"
                    onClick={() => setFilters(categorie)}
                  >
                    {categorie.label}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <ImagesGallery images={filteredImages} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
