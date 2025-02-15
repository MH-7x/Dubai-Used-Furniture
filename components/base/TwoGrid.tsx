import Image from "next/image";

const TwoGrid = () => {
  return (
    <section className="con mt-40">
      <h2 className="md:text-3xl text-2xl text-center text-primary">
        How to Buy or Sell Your Furniture with Us
      </h2>
      <div className="max-w-4xl mx-auto text-center text-text text-lg mt-5">
        Our process is designed with simplicity and efficiency in mind, catering
        to both buyers and sellers.
      </div>
      <div className="con mt-16 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div>
          <h3 className="text-2xl font-bold text-text">For Buyers</h3>
          <p className="text-lg/5 text-text mt-3">
            If you’re wondering where to buy used beds in Dubai, our website
            provides a user-friendly browsing experience. You can filter by
            product type, condition, location, and price, making it easier than
            ever to find exactly what you need.
          </p>
          <p className="text-lg/5 text-text mt-3">
            Whether it’s discovering the best places to find second-hand beds in
            Dubai or taking advantage of affordable used mattresses for sale in
            Dubai, we have a solution that fits your requirements.
          </p>
        </div>
        <div className="h-96 relative bg-accent md:ml-10">
          <Image
            src={"/beds/used-beds-buyers.jpg"}
            alt="used beds buyers in dubai"
            fill
            className="object-cover object-center absolute"
          />
        </div>
      </div>
      <div className=" mt-10 items-center con grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="h-96 relative bg-accent md:mr-10">
          <Image
            src={"/beds/used-beds-sellers.jpg"}
            alt="used beds buyers in dubai"
            fill
            className="object-cover object-center absolute"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text">For Sellers</h3>
          <p className="text-lg/5 text-text mt-3">
            Looking to upgrade or simply declutter? Sell your unwanted items
            easily on our platform. We offer competitive rates and a hassle-free
            process to help you sell used bedroom furniture in Dubai.
          </p>
          <p className="text-lg/5 text-text mt-3">
            Our goal is to ensure that every piece finds a new home where it’s
            valued just as much as it was before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoGrid;
