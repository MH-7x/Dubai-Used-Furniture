"use client";
import Image from "next/image";
import { motion } from "motion/react";
const GalleryGrid = ({
  list,
}: {
  list: {
    src: string;
    alt: string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {list.map((img, i) => (
        <div
          key={i}
          className="h-80 rounded-lg bg-accent/50 relative overflow-hidden"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="absolute object-cover object-center "
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50"
          >
            <p className="text-white text-lg font-semibold">{img.alt}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
