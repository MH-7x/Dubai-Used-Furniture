import React from "react";
import ImageSlider from "../ImagesSlider";

const Gallery = ({
  images,
  title,
  desc,
}: {
  images: string[];
  title: string;
  desc: string;
}) => {
  return (
    <section id="gallery" className="con mt-32 md:px-0 px-3 pb-16">
      <h2 className="md:text-3xl text-2xl text-primary text-center">{title}</h2>
      <p className="max-w-2xl text-text text-center text-lg/6 mx-auto mt-5">
        {desc}
      </p>
      <ImageSlider imgs={images} />
    </section>
  );
};

export default Gallery;
