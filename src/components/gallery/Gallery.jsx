import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Thumbnail from "../../components/thumbnail/Thumbnail";

const Gallery = ({ images }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
      <Masonry>
        {images
          .filter((i) => !!i.url)
          .map((image, index) => {
            return (
              <Thumbnail
                key={index}
                title={image.title}
                href={image.href}
                imageUrl={image.url}
              />
            );
          })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Gallery;
