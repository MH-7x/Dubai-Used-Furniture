import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import GetStarted from "@/components/base/GetStarted";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import TwoGrid from "@/components/base/TwoGrid";
import Content from "@/components/Content";
import Extra from "@/components/Extra";

import SerChooseUs from "@/components/SerChooseUs";

import {
  RiArmchairFill,
  RiCalendarCheckFill,
  RiMedalFill,
  RiMoneyDollarCircleFill,
  RiRecycleFill,
  RiUserStarFill,
} from "@remixicon/react";
import React from "react";

const UsedOfficeFurniturePage = () => {
  return (
    <main className="md:mt-24 mt-20">
      <ServiceHeroSection
        title={{
          main: "Used Office Furniture in Dubai",
          auth: "Used Desks, Chairs, & More",
        }}
        desc="Welcome to Dubai Used Furniture, your premier source for high-quality, used office furniture in Dubai. Setting up or upgrading your workspace doesn't have to break the bank. We offer an extensive collection of second hand office furniture Dubai, providing businesses and individuals with pre owned office furniture Dubai solutions that are both cost-effective and environmentally responsible. From office desks and chairs to workstations and storage solutions, discover how Dubai Used Furniture can furnish your office space efficiently and affordably."
      />
      <SerChooseUs
        title="Why Choose Used Office Furniture in Dubai?"
        desc="Choosing used office furniture is a practical and cost-effective decision for businesses and individuals. Here’s why it’s worth considering:"
        lis={[
          {
            title: "Cost Savings",
            desc: " Why pay full price when you can save up to 50% with affordable office furniture in Dubai? This is a game-changer for startups, small businesses, or anyone looking to stretch their budget further.",
            icon: <RiMoneyDollarCircleFill size={50} />,
          },
          {
            title: "Eco-Friendly Choice",
            desc: " Opting for eco-friendly office furniture reduces waste and supports sustainability by giving pre-owned items a second life",
            icon: <RiRecycleFill size={50} />,
          },
          {
            title: "Un-compromised Quality:",
            desc: "At Dubai Used Furniture, every piece is carefully inspected to ensure durability and functionality. Our refurbished office furniture often rivals new items in condition and performance.",
            icon: <RiArmchairFill size={50} />,
          },
        ]}
        extra="From single desks to full office setups, used office furniture delivers value without sacrificing style or quality."
      />
      <SecondSec
        images={[
          {
            src: "/tables/used-tables-furniture.webp",
            alt: "Used tables furniture store image",
          },
          {
            src: "/tables/used-tables-furniture-2.jpeg",
            alt: "Tables furniture in Dubai",
          },
          {
            src: "/tables/used-tables-furniture-landscape.webp",
            alt: "Used Tables Furniture Dubai Store",
          },
        ]}
        title="Explore Our Used Office Furniture for Sale in Dubai"
        desc="Our diverse range of second-hand office furniture caters to every workspace need. At Dubai Used Furniture, you’ll find:"
        lis={[
          {
            title: "Office Desks:",
            desc: "Compact designs for small spaces or spacious executive desks for a professional look.",
          },
          {
            title: "Office Chairs:",
            desc: "Ergonomic options, executive seating, and more to keep you comfortable all day.",
          },
          {
            title: "Conference Tables:",
            desc: "Stylish pre-owned conference tables for productive meetings in any office.",
          },
          {
            title: "Filing Cabinets:",
            desc: "Affordable storage solutions to keep your documents secure and organized.",
          },
          {
            title: "Workstations:",
            desc: "Modular setups perfect for collaborative or open-plan offices.",
          },
        ]}
      />
      <FooterCTA
        title={{
          main: "Top Brands",
          ath: "Used Office Furniture in Dubai ",
        }}
        src="/home/cta-img-2.png"
        alt="Seller of Dubai Used Furniture"
        desc="We stock top brands like Herman Miller and Steel case, offering premium quality at unbeatable prices. Searching for used office chairs for sale in Dubai or second-hand office desks? Our inventory is updated regularly to meet your demands."
      />
      <Content
        title="Why Choose Used Office Furniture from Dubai Used Furniture?"
        first={[
          {
            title: "Smart Savings with Second Hand Office Furniture",
            parts: [
              "In today's business environment, smart spending is crucial. Dubai Used Furniture understands this, offering you the opportunity to make smart savings with second hand office furniture.",
              " Why pay full price for new furniture when you can acquire cheap used office furniture in Dubai that meets your needs and exceeds your expectations? Businesses across Dubai are realizing the significant cost effective advantages of choosing used office furniture.",
              "Whether you're a startup watching every penny or an established company looking to optimize your budget, our affordable used office furniture in Dubai allows you to allocate resources where they matter most – growing your business.",
              "Explore our inventory and see how much you can save money buying used office furniture in Dubai. Take advantage of discount used office furniture Dubai and furnish your entire office without exceeding your financial plan. ",
              "For a budget friendly office setup Dubai used furniture is the intelligent choice.",
            ],
          },
          {
            title: "Sustainable and Eco-Friendly Office Solutions",
            parts: [
              "Choosing used office furniture is not only financially savvy but also an eco friendly office furniture dubai used option. By opting for second hand office furniture, you are actively participating in sustainable office furniture dubai second hand practices. ",
              "Reduce your company's carbon footprint and contribute to a circular economy by giving pre owned office furniture a new lease on life. Dubai Used Furniture is committed to providing sustainable office solutions Dubai, offering a wide range of furniture that aligns with your company's environmental responsibility goals. ",
              "Make the eco-friendly choice and furnish your workspace with our used office furniture – it’s good for your budget and great for the planet. Join the movement towards environmentally friendly office furniture Dubai and choose used.",
            ],
          },
          {
            title: "Quality and Variety You Can Trust",
            parts: [
              "We understand that quality is paramount, even when choosing used office furniture. At Dubai Used Furniture, we ensure that all our pre owned office furniture meets high standards of quality and functionality. ",
              "Forget the misconception of worn-out furniture; our selection includes quality used office furniture dubai that is carefully inspected and often features like new used office furniture Dubai and gently used office furniture Dubai options.",
              " We also offer refurbished office furniture Dubai UAE, giving you access to furniture that looks and performs exceptionally well. Dubai Used Furniture provides reliable second hand office furniture Dubai, offering a vast variety of styles and types to suit any office aesthetic.",
              "From modern to traditional, find the perfect pieces to create a professional and comfortable workspace with our trusted used office furniture.",
            ],
          },
        ]}
      />
      <TwoGrid
        title="Our Extensive Range of Used Office Furniture"
        desc="We offer a wild range of used office furniture that will fulfill you office requirement on cheap prices. Take a look to our affordable used office furniture and select which one you need."
        sideOne={{
          title: "Used Office Desks in Dubai: Find Your Perfect Workspace",
          desc: [
            "Discover the ideal used office desks in Dubai at Dubai Used Furniture. Our inventory features a wide array of second hand office desks Dubai to match any work style and office layout. From spacious executive desks to compact workstations, we have used office desks in various sizes, styles, and materials.",
            "Whether you need individual desks, collaborative workstations, or height-adjustable standing desks, explore our collection to find office desks used that enhance productivity and comfort. Outfit your office with used office desks for sale Dubai from top brands, all at significantly reduced prices.",
          ],
          src: "/beds/used-beds-buyers.jpg",
          alt: "test alt",
        }}
        sideTwo={{
          title: "Used Office Chairs Dubai: Ergonomic Comfort for Your Team",
          desc: [
            "Ensure your team's comfort and well-being with our selection of used office chairs Dubai. Dubai Used Furniture offers a diverse range of second hand office chairs Dubai, including ergonomic chairs, executive chairs, and task chairs.",
            "Find used office chairs that provide excellent support and promote good posture, essential for a productive workday. We stock used office chairs for sale Dubai in various styles and conditions, including affordable ergonomic office chairs in Dubai options, allowing you to prioritize employee health without exceeding your budget.",
          ],
          src: "/beds/used-beds-buyers.jpg",
          alt: "test alt",
        }}
      />
      <TwoGrid
        sideOne={{
          title:
            "Used Office Tables Dubai: Meeting Tables, Conference Tables, and More",
          desc: [
            "From meeting rooms to collaborative spaces, Dubai Used Furniture provides a comprehensive selection of used office tables Dubai. Browse our second hand office tables Dubai collection to find conference tables, meeting tables, training tables, and more.",
            "We offer used office tables in various sizes and shapes to accommodate any meeting or workspace requirement. Find used conference tables dubai used and used reception desks dubai to create functional and professional areas within your office, all while benefiting from significant cost savings.",
          ],
          src: "/beds/used-beds-buyers.jpg",
          alt: "test alt",
        }}
        sideTwo={{
          title:
            "Used Office Storage & Cabinets: Organize Your Workspace Efficiently",
          desc: [
            "Maximize organization and efficiency in your office with Dubai Used Furniture's range of used office cabinets Dubai and used office storage Dubai solutions. Our inventory includes used office cabinets, filing cabinets, bookcases, and storage units to keep your workspace clutter-free and productive.",
            "Discover used filing cabinets dubai and other used office storage options that are both functional and affordable. From refurbished office cabinets in Deira to various other styles across Dubai, we have the storage solutions to meet your needs.",
          ],
          src: "/beds/used-beds-buyers.jpg",
          alt: "test alt",
        }}
      />
      <Gallery
        title="Used Office Furniture Collection Gallery"
        desc="Take a look to some of used office furniture that are available for sell in dubai, UAE. If you need want to see full collection, you can send a message to our WhatsApp !"
        images={[
          "/tables/gallery-1.jpg",
          "/tables/gallery-2.jpg",
          "/tables/gallery-3.jpg",
          "/tables/gallery-4.jpg",
          "/tables/gallery-5.jpg",
          "/tables/gallery-6.jpg",
          "/tables/gallery-7.jpg",
          "/tables/gallery-8.jpg",
          "/tables/gallery-9.jpg",
        ]}
      />
      <GetStarted
        sub="selling process"
        title="Sell Your Used Office Furniture in Dubai with Ease"
        desc="Ready to sell used office furniture in Dubai? We make it quick and convenient. Whether you’re relocating, downsizing, or upgrading, Dubai Used Furniture buys all types of second-hand office furniture in the UAE—desks, chairs, cabinets, and beyond."
        lis={[
          {
            title: "Submit Photos",
            desc: "Send us images of the furniture you’d like to sell",
            src: "/appliance/Cost-Savings.svg",
            alt: "ddd",
          },
          {
            title: "Receive a Quote",
            desc: "We’ll offer a fair price based on condition and market value.",
            src: "/appliance/Cost-Savings.svg",
            alt: "ddd",
          },
          {
            title: "Enjoy Free Pickup",
            desc: " Once approved, we’ll arrange a pickup at a time that suits you.",
            src: "/appliance/Cost-Savings.svg",
            alt: "ddd",
          },
        ]}
        extra="Selling your furniture is a great way to declutter and earn extra cash. If you’re asking, “How can I sell my used office furniture in Dubai?”—we’ve got the answer."
      />
      <SerChooseUs
        title="Why Trust Dubai Used Furniture?"
        desc="When it comes to the used office furniture market in Dubai, we’re a name you can rely on. Here’s what sets us apart:"
        lis={[
          {
            title: "Years of Experience",
            desc: "We’ve served countless businesses across Dubai and the UAE with expertise you can trust.",
            icon: <RiCalendarCheckFill size={50} />,
          },
          {
            title: "Rigorous Quality Checks",
            desc: "Every item we sell is vetted for quality, ensuring you get reliable furniture every time.",
            icon: <RiMedalFill size={50} />,
          },
          {
            title: "Customer-First Approach:",
            desc: "Your satisfaction is our priority, whether you’re buying or selling.",
            icon: <RiUserStarFill size={50} />,
          },
        ]}
        extra="As one of the best places to buy used office furniture in Dubai, we’re committed to delivering value, sustainability, and exceptional service."
      />
      <Content
        title="Serving Businesses Across Dubai and the UAE"
        first={[
          {
            title: "Your Local Used Office Furniture Supplier in Dubai",
            parts: [
              "Dubai Used Furniture is proud to be your trusted used office furniture supplier Dubai and used office furniture company Dubai. We are a leading used office furniture store Dubai, conveniently located to serve businesses throughout Dubai.",
              "Whether you are in Jumeirah, Business Bay, Deira, or anywhere else in Dubai, our used office furniture near me Dubai service ensures you can easily access our wide selection. Visit our used office furniture market Dubai or browse our online catalog to find the perfect pieces for your office space. ",
              "As a dedicated second hand office furniture supplier in Dubai, we are committed to providing exceptional service and quality furniture to local businesses.",
            ],
          },
          {
            title: "Extending Our Services Across the UAE",
            parts: [
              "While based in Dubai, Dubai Used Furniture's reach extends across the UAE. Businesses throughout the office furniture used UAE market can benefit from our extensive range and affordable prices. ",
              "We also serve neighboring Emirates, offering second hand office furniture Sharjah and used office furniture Abu Dhabi solutions. If you are looking for office furniture stores UAE that provide both value and quality, Dubai Used Furniture is your ideal partner.  ",
              "We are committed to providing cheap office furniture UAE and second-hand office furniture shops UAE across the Emirates.",
            ],
          },
          {
            title: "Solutions for Startups, SMEs, and Large Enterprises",
            parts: [
              "Dubai Used Furniture provides tailored used office furniture for businesses Dubai solutions for companies of all sizes. Used office furniture for startups Dubai is a particularly smart choice, allowing new businesses to allocate their initial capital effectively.",
              "Used office furniture for small businesses Dubai offers scalability and affordability as companies grow. Even commercial second hand office furniture Dubai is a viable option for large enterprises looking to furnish departments or project spaces economically.",
              " No matter your business size, Dubai Used Furniture has the used office furniture to meet your needs and budget.",
            ],
          },
        ]}
      />
      <FAQs
        Faqs={[
          {
            question:
              "Where are the best places to buy used office furniture in Dubai?",
            answer:
              "Dubai Used Furniture is one of the best places to buy used office furniture in Dubai, offering a wide selection, quality assurance, and convenient services. Visit our store or browse our online catalog.",
          },
          {
            question:
              "What are some tips for buying second-hand office furniture in UAE?",
            answer:
              "When buying second-hand office furniture in UAE, prioritize quality and condition. Inspect furniture thoroughly, ask about its history, and choose reputable suppliers like Dubai Used Furniture. Read our blog for more tips for buying second-hand office furniture in UAE.",
          },
          {
            question: "How can I sell my used office furniture in Dubai?",
            answer:
              "If you want to sell your used office furniture in Dubai, contact Dubai Used Furniture. We purchase quality used office furniture and can offer a fair price for your items. Learn how to sell used office furniture in Dubai by contacting us today.",
          },
          {
            question:
              "Is there used office furniture for tech startups in Dubai?",
            answer:
              "Yes! Dubai Used Furniture provides used office furniture for tech startups in Dubai and all types of businesses. We offer affordable and sustainable solutions perfect for the fast-paced environment of tech companies.",
          },
          {
            question:
              "Where can law firms find second-hand office furniture in UAE?",
            answer:
              "Dubai Used Furniture is a great source for second-hand office furniture for law firms in UAE. We offer professional and quality furniture suitable for law offices and other professional services.",
          },
          {
            question: "Are pre-owned Steelcase desks in Abu Dhabi available?",
            answer:
              "While our main store is in Dubai, we serve Abu Dhabi and may have pre-owned Steelcase desks in Abu Dhabi available. Contact us to discuss delivery options and current stock.",
          },
          {
            question:
              "What options are there for affordable used office furniture for small businesses in Dubai?",
            answer:
              "Dubai Used Furniture specializes in affordable used office furniture for small businesses in Dubai. Our entire range is designed to be budget-friendly, helping small businesses furnish their offices without overspending.",
          },
        ]}
      />
      <FooterCTA
        title={{
          main: "Upgrade Your Office Affordably Today",
        }}
        desc=" Contact us today for a personalized quote or to discuss your specific used office furniture requirements. Let Dubai Used Furniture help you create a functional, stylish, and budget-friendly workspace!"
        extra="Browse Used Office Furniture Catalog Contact Us For a Quote Visit Our Store"
        src="/home/cta-img-2.png"
        alt="Seller of Dubai Used Furniture"
      />
      <Extra
        title="Contact Dubai Used Furniture"
        desc="If you are office owner or team member who is looking for used office furniture or want to sell their old office staff, then you comes to best place. contact now and we will fulfill you requirements"
        list={[
          "Store Address : Building No.4 Moatab Bin Auf St, Bu Shaghara Sharjah",
          "Contact Numbers : +971 55 123 4567, +971 55 123 4567",
          "Email Address : dubaiusedfurniture@gmail.com",
        ]}
      />
    </main>
  );
};

export default UsedOfficeFurniturePage;
