import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import Services from "@/components/base/Services";

import type { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "AlAinPageMetadata",
  });
}

export default function UsedFurnitureInAlAin() {
  return (
    <>
      <main
        className="con mt-36"
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        {/* Main Heading */}
        <h1
          style={{
            fontSize: "2.8rem",
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "80px",
          }}
        >
          Used Furniture in Al Ain – Dubai Used Furniture
        </h1>

        {/* Introduction */}
        <section style={{ marginBottom: "40px" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Welcome to Dubai Used Furniture, your trusted partner in buying and
            selling high-quality pre-owned furniture in Al Ain and across the
            UAE. Our extensive range and commitment to affordability make us the
            best choice for locals seeking to furnish their homes or offices
            without compromise.
          </p>
          <p style={{ fontSize: "1rem" }}>
            Whether you&lsquo;re searching for{" "}
            <strong>used home furniture in Al Ain</strong> or looking to upgrade
            your workspace with <strong>used office furniture</strong>, our
            diverse inventory and customer-focused service are here to ensure a
            seamless experience.
          </p>
        </section>
        <Services
          title="Buy & Sell Used Furniture in Al Ain"
          desc="Buy & sell used furniture in Al Ain with Dubai Used Furniture! Affordable prices for sofas, beds, tables & appliances. Free pickup, instant cash payments, and eco-friendly solutions. Start today!"
          services={[
            {
              title: "Used Seating Furniture in Al Ain",
              description:
                "We provide furniture buy and sell services in Al Ain for the following types of seating furniture used for seating purposes.",
              items: [
                "Rocking chair",
                "Chair",
                "Lift chair",
                "Bar Stool",
                "Chaise longue",
                "Bench",
                "Divan",
                "Sofa or settee",
              ],
              src: "/images/seating-furniture.jpg",
            },
            {
              title: "Used Table Furniture in Al Ain",
              description:
                "We buy and sell any kind of table furniture in good condition in UAE. Located in Al Ain.",
              items: [
                "Coffee Table",
                "Billiard Table",
                "Dining Table",
                "Office Work Station",
                "Computer Table",
                "Study Table",
                "TV Stand",
                "Dressing Table (Child Bed)",
              ],
              src: "/images/table-furniture.jpg",
            },
            {
              title: "Used Sleeping or Lying Furniture in Al Ain",
              description:
                "We buy and sell different types of furniture mostly used for sleeping and lying purposes.",
              items: [
                "Bunk Bed",
                "Bed",
                "Platform Bed",
                "Four-Poster Bed",
                "Murphy Bed",
                "Infant Bed (Child Bed)",
                "Sleigh Bed",
                "Mattress",
              ],
              src: "/images/laying-furniture.jpg",
            },
            {
              title: "Used Storage Furniture in Al Ain",
              description:
                "We buy and sell all kinds of storage furniture like cupboards, cabinets, etc., in Dubai.",
              items: [
                "Baker's Rack",
                "Cupboard",
                "Chifforobe",
                "Bookcase",
                "Cabinetry",
                "Filing Cabinet",
                "Kitchen Cabinet",
                "Chest of Drawers or Dresser",
              ],
              src: "/images/storage-furniture.jpg",
            },
            {
              title: "Used Home Appliance in Al Ain",
              description:
                "We buy all kinds of used home appliances at the best price in good condition. Contact us if you have any appliance to sell.",
              items: [
                "Refrigerator",
                "Washing Machine",
                "Air Condition",
                "Gas Cooker",
                "Dish Washer",
                "Freezer",
                "LED TV",
                "Microwave Oven",
              ],
              src: "/images/home-appliance.webp",
            },
          ]}
          others={[
            {
              title: "Used Home Furniture Buyers in Al Ain",
              desc: "Sell or purchase used home furniture in Al Ain. Receive best price for your second-hand sofas, beds, and more. Quick, convenient service!",
              src: "/images/used-home-furniture.jpg",
            },
            {
              title: "Used Office Furniture Buyers in Al Ain",
              desc: "Sell your old office furniture in Al Ain or purchase cheap second-hand desks, chairs, and cabinets. Top prices, fast deals!",
              src: "/images/used-office-furniture.jpeg",
            },
            {
              title: "Used Hotel Furniture Buyers in Al Ain",
              desc: "Dubai Used Furniture offers hassle-free hotel furniture removal with reasonable prices, easy pick-up, and quick payment in Al Ain.",
              src: "/images/used-hotel-furniture.webp",
            },
          ]}
        />
        {/* Why Choose Us */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "2rem", marginBottom: "15px", color: "#0056b3" }}
          >
            Why Choose Dubai Used Furniture in Al Ain?
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            At Dubai Used Furniture, our commitment to quality, affordability,
            and trust sets us apart. Here’s why Al Ain residents choose us:
          </p>
          <ul style={{ marginLeft: "20px", listStyleType: "disc" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Trust & Expertise:</strong> With years of experience, our
              team thoroughly inspects every piece. We’re the preferred{" "}
              <em>Used Furniture Buyers Al Ain</em> ensuring the best quality
              for our clients.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Affordable Prices:</strong> Our competitive pricing means
              you can enjoy great deals—from{" "}
              <em>Affordable Used Furniture in Al Ain</em> to{" "}
              <em>Cheap Used Furniture</em> that doesn’t compromise on style.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Wide Selection:</strong> Our inventory ranges from modern
              to vintage, including <em>Used Home Furniture Al Ain</em> and{" "}
              <em>Used Office Furniture Al Ain</em> options.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Customer-Centric Service:</strong> Our knowledgeable staff
              provides professional advice and seamless transactions, making us
              one of the <em>Best Used Furniture Shops in Al Ain</em>.
            </li>
          </ul>
        </section>

        {/* Our Range */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "2rem", marginBottom: "15px", color: "#0056b3" }}
          >
            Our Range of Quality Pre-Owned Furniture
          </h2>
          {/* Home Furniture Collection */}
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
              Home Furniture Collection
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
              Our home furniture collection is designed to suit a variety of
              tastes and budgets. We offer:
            </p>
            <ul style={{ marginLeft: "20px", listStyleType: "circle" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong>Bedroom Sets & Beds:</strong> Choose from used bedroom
                furniture in Al Ain including complete sets and individual beds
                available in single, double, king, queen, and super king sizes.{" "}
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Living Room Essentials:</strong> Enhance your living
                space with our selection of used sofas, coffee tables, media
                racks, and accent chairs.{" "}
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Dining & Additional Pieces:</strong> Find elegant dining
                tables, chairs, sideboards, and storage cabinets to complete
                your home décor.{" "}
              </li>
            </ul>
          </div>
          {/* Office & Commercial Furniture */}
          <div>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
              Office & Commercial Furniture
            </h3>
            <p style={{ fontSize: "1rem" }}>
              Upgrade your workspace with our premium selection of used office
              furniture. Our collection includes desks, chairs, filing cabinets,
              conference tables, and more—ideal for creating a productive
              environment at a fraction of the cost.{" "}
            </p>
          </div>
        </section>
        <Gallery
          title="Used Furniture Collection in Al Ain"
          desc="Discover top-quality used furniture collections in Al Ain! Buy & sell affordable pre-owned sofas, beds, tables & appliances. Free pickup, trusted buyers, and eco-friendly options. Explore now!"
          images={[
            "/tables/gallery-2.jpg",
            "/tables/gallery-3.jpg",
            "/tables/gallery-4.jpg",
            "/tables/gallery-5.jpg",
            "/tables/gallery-6.jpg",
            "/tables/gallery-7.jpg",
            "/seating/gallay-1.jpg",
            "/seating/gallay-2.jpg",
            "/seating/gallay-3.jpg",
            "/seating/gallay-4.jpg",
            "/seating/gallay-5.jpg",
            "/appliance/gallery-1.jpg",
            "/appliance/gallery-2.jpg",
            "/appliance/gallery-3.jpg",
            "/appliance/gallery-4.jpg",
            "/appliance/gallery-5.jpg",
            "/appliance/gallery-6.jpg",
          ]}
        />
        {/* Used Furniture Buyers in Al Ain */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "2rem", marginBottom: "15px", color: "#0056b3" }}
          >
            Used Furniture Buyers in Al Ain
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            There are so many reasons why you might choose to sell your
            furniture. Whether you&apos;re moving house, upgrading your space,
            or simply need extra cash, Dubai Used Furniture is here to help. As
            the leading <strong>Used Furniture Buyers in Al Ain</strong>, we buy
            all kinds of second-hand items, including:
          </p>
          <ul style={{ marginLeft: "20px", listStyleType: "disc" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Sofas, Beds, & Tables:</strong> From modern designs to
              classic styles, we offer top prices for your unwanted furniture.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Office Furniture:</strong> Desks, chairs, and cabinets in
              good condition.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Home Appliances:</strong> Refrigerators, washing machines,
              and more.
            </li>
          </ul>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            We provide <strong>quick cash payments</strong> and free pickup
            services across Al Ain and the UAE. No need to transport your items—
            we’ll come to your home or office to collect them. Call us today at{" "}
            <a href="tel:0509359044">050 935 9044</a> to get started!
          </p>
        </section>

        {/* Buying Used Furniture: Tips & Advice */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "2rem", marginBottom: "15px", color: "#0056b3" }}
          >
            Buying Used Furniture in Al Ain: What to Look For
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            When shopping for <strong>used furniture in Al Ain</strong>, it’s
            important to consider both cost and quality. Here’s how to make
            smart decisions:
          </p>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
            1. Check the Cost
          </h3>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            While affordability is key, ensure the price reflects the item’s
            condition. For example, a chair priced at AED 50 may seem like a
            steal, but if it’s heavily worn, it might not last long.
          </p>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
            2. Inspect the Quality
          </h3>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            Always examine the furniture for defects or structural issues.
            Poorly constructed items can be unsafe and may require costly
            repairs.
          </p>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
            3. Research the Seller
          </h3>
          <p style={{ fontSize: "1rem", marginBottom: "15px" }}>
            Choose a reputable dealer like Dubai Used Furniture. Check reviews,
            ask for references, and ensure they have experience in the industry.
          </p>
          <p style={{ fontSize: "1rem" }}>
            By following these tips, you can find high-quality, affordable used
            furniture that meets your needs.
          </p>
        </section>

        {/* Our Process */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "2rem", marginBottom: "15px", color: "#0056b3" }}
          >
            How Our Process Works – Buy & Sell with Ease
          </h2>
          <ol style={{ marginLeft: "20px" }}>
            <li style={{ marginBottom: "15px" }}>
              <strong>Explore Our Inventory:</strong> Browse our extensive
              online catalog or visit our Al Ain showroom. Whether you’re
              looking for vintage charm or modern aesthetics, our inventory has
              something for everyone.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>Expert Quality Assurance:</strong> Every item is
              meticulously inspected to ensure durability and value. We
              guarantee that each piece meets the highest standards before it
              reaches you.
            </li>
            <li style={{ marginBottom: "15px" }}>
              <strong>Seamless Transactions:</strong> Enjoy transparent pricing,
              secure payment methods, and prompt delivery. Our streamlined
              process ensures you experience a hassle-free purchase or sale.{" "}
            </li>
          </ol>
        </section>

        {/* Sustainability */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "2rem", marginBottom: "15px", color: "#0056b3" }}
          >
            Your Local Partner in Sustainability
          </h2>
          <p style={{ fontSize: "1rem" }}>
            Choosing pre-owned furniture not only saves you money but also
            supports a sustainable lifestyle. By reusing quality furniture, you
            help reduce waste and promote eco-friendly practices in Al Ain. Join
            us in our mission towards a greener future.{" "}
          </p>
        </section>

        {/* Contact Section */}
        <FooterCTA
          title={{
            main: " Contact Dubai Used Furniture Today",
          }}
          desc="  Ready to transform your space or sell your used furniture? Get in
            touch with us now!"
          src="/seating/contact-seating.png"
          alt="Contact Us Now"
          extra="Experience exceptional quality, customer service, and sustainability with Dubai Used Furniture – your premier destination for used furniture in Al Ain."
        />
      </main>
    </>
  );
}
