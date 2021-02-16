import React, { useState, useEffect } from "react";
import ImagesGallery from "../../components/images-gallery/ImagesGallery";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import "../../styles/ContentOverview.scss";

const Collection = ({ collection }) => {
  const { images } = collection;
  const [category, setCategory] = useState("Par catégorie");
  const [openFilters, setOpenFilters] = useState(false);
  const [filteredImages, setFilteredImages] = useState(images);

  // en global au route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collection]);

  // useEffect(() => {
  //   setFilters("Par catégorie");
  //   setOpenFilters(false);
  // }, [collection]);

  // useEffect(() => {
  //   filters !== "Par catégorie"
  //     ? setFilteredImages(images.filter((image) => image.categorie === filters))
  //     : setFilteredImages(images);
  // }, [filters, images]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
            <h1>{collection.name}</h1>
            <div
              className="filters"
              onClick={() => setOpenFilters(!openFilters)}
            >
              {/* <p>{filters}</p>
              <img
                className={openFilters ? "top-arrow" : "down-arrow"}
                src={downArrow}
                alt=""
              /> */}

              {/* <div className={openFilters ? "open-filters" : "close-filters"}>
                <p
                  className="select-filter"
                  onClick={() => setFilters("Par catégorie")}
                >
                  Tout afficher
                </p>
                {collection.categories.map((categorie, i) => (
                  <p
                    className="select-filter"
                    onClick={() => setFilters(categorie.id)}
                  >
                    {categorie.label}
                  </p>
                ))}
              </div> */}
              {collection.categories?.length && (
                <FormControl
                  variant="outlined"
                  // className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    {"Catégorie"}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={handleChange}
                    label="Catégorie"
                  >
                    <MenuItem value="">
                      <em>{"Tout afficher"}</em>
                    </MenuItem>
                    {collection.categories.map((cat, i) => (
                      <MenuItem key={i} value={cat.id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
          </div>
          <ImagesGallery images={filteredImages} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
