import React from "react";
import ImageSlider from "../ImagesSlider";

const Gallery = () => {
  return (
    <section id="gallery" className="con mt-32 md:px-0 px-3 pb-16">
      <h2 className="md:text-3xl text-2xl text-primary text-center">
        Our Used Seating Furniture Collection
      </h2>
      <p className="max-w-2xl text-text text-center text-lg/6 mx-auto mt-5">
        Discover our diverse collection of used seating furniture, carefully
        selected to meet your style and budget needs.
      </p>
      <ImageSlider />
    </section>
  );
};

export default Gallery;
