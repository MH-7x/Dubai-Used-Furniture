import Image from "next/image";

const TwoGrid = ({
  title,
  desc,
  sideOne,
  sideTwo,
}: {
  title: string;
  desc: string;
  sideOne: { title: string; desc: string[]; src: string; alt: string };
  sideTwo: { title: string; desc: string[]; src: string; alt: string };
}) => {
  return (
    <section className="con mt-40 md:px-0 px-3">
      <h2 className="md:text-3xl text-2xl text-center text-primary">{title}</h2>
      <div className="max-w-4xl mx-auto text-center text-text text-lg mt-5">
        {desc}
      </div>
      <div className="con mt-16 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div>
          <h3 className="text-2xl font-bold text-text">{sideOne.title}</h3>
          <p className="text-lg/5 text-text mt-3">{sideOne.desc[0]}</p>
          <p className="text-lg/5 text-text mt-3">{sideOne.desc[1]}</p>
        </div>
        <div className="md:h-96 h-80 relative bg-accent md:ml-10">
          <Image
            src={sideOne.src}
            alt={sideOne.alt}
            title={sideOne.alt}
            fill
            className="object-cover object-center absolute"
          />
        </div>
      </div>
      <div className=" mt-10 items-center con grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="md:h-96 h-80 relative bg-accent md:mr-10 md:order-1 order-2">
          <Image
            src={sideTwo.src}
            alt={sideTwo.alt}
            title={sideTwo.alt}
            fill
            className="object-cover object-center absolute"
          />
        </div>
        <div className="md:order-2 order-1">
          <h3 className="text-2xl font-bold text-text">{sideTwo.title}</h3>
          <p className="text-lg/5 text-text mt-3">{sideTwo.desc[0]}</p>
          <p className="text-lg/5 text-text mt-3">{sideTwo.desc[1]}</p>
        </div>
      </div>
    </section>
  );
};

export default TwoGrid;
