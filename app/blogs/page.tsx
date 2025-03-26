import { App } from "@/constants/application";
import { RiArrowRightLine, RiCalendar2Fill } from "@remixicon/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Dubai Used Furniture Blog Insights & Inspiration",
  description:
    "Discover expert tips on furniture styling, sustainability, and smart shopping in Dubai. From budget-friendly home makeovers to design trends, our blog helps you furnish smarter in Dubai.",
  alternates: {
    canonical: `${App.appUrl}/blogs`,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      "max-image-preview": "large",
      follow: true,
      index: true,
    },
  },
  openGraph: {
    type: "article",
    countryName: "United Arab Emirates",
    title: "Dubai Used Furniture Blog Insights & Inspiration",
    description:
      "Discover expert tips on furniture styling, sustainability, and smart shopping in Dubai. From budget-friendly home makeovers to design trends, our blog helps you furnish smarter in Dubai.",
    images: `${App.appUrl}/images/Dubai-Used-Furniture.webp`,
    publishedTime: Date.now.toString(),
    siteName: "Dubai Used Furniture",
    url: `${App.appUrl}/blogs`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Used Furniture Blog Insights & Inspiration",
    description:
      "Discover expert tips on furniture styling, sustainability, and smart shopping in Dubai. From budget-friendly home makeovers to design trends, our blog helps you furnish smarter in Dubai.",
    images: `${App.appUrl}/images/Dubai-Used-Furniture.webp`,
  },
};
interface Blogs {
  _id: string;
  title: string;
  caption: string;
  slug: string;
  createdAt: Date;
  image: string;
  category: string;
}

async function GetBlogs(): Promise<Blogs[] | { error: string }> {
  try {
    const response = await fetch(
      "https://blogs.dubaiusedfurniture.ae/api/list-all",
      {
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Failed To Load Blogs - " + response.statusText);
    }

    const results = await response.json();
    if (!results.success) {
      throw new Error(results.message || "Server did't response");
    }

    return results.data;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something Went Wrong!",
    };
  }
}

const BlogSection = async () => {
  const data = await GetBlogs();
  const categories = "error" in data ? [] : data.map((d) => d.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <>
      <header className=" py-16 w-full md:mt-24 max-w-4xl mx-auto md:px-0 px-3">
        <h1 className="text-center text-primary md:text-4xl text-2xl font-bold">
          Dubai Used Furniture Blog Insights & Inspiration
        </h1>
        <p className="text-gray-600 md:text-xl text-center mt-4">
          Explore expert tips on furniture styling, sustainability, and smart
          shopping. From budget-friendly home makeovers to design trends, our
          blog helps you furnish smarter in Dubai.
        </p>
      </header>
      {"error" in data ? (
        <section className="max-w-6xl mx-auto md:p-6 py-6 bg-red-100">
          <div className="text-center text-red-600 text-lg">{data.error}</div>
        </section>
      ) : (
        <section className="max-w-6xl mx-auto md:p-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 md:px-0 px-3">
            {/* Main Blog Card */}
            {data.length >= 1 && (
              <div className="bg-white rounded-2xl md:shadow-lg overflow-hidden md:col-span-2 flex md:flex-row flex-col items-center">
                <div className="md:w-1/2 w-full md:h-96 h-72 bg-gray-200 relative">
                  <Image
                    src={data[0].image}
                    alt={data[0].title}
                    fill
                    className="object-cover object-center absolute"
                  />
                </div>
                <div className="md:p-6 py-6 px-2 md:w-1/2 w-full">
                  <span className="text-purple-600 font-semibold text-sm px-3 py-1 bg-purple-100 rounded-full">
                    {data[0].category}
                  </span>
                  <Link href={`/blogs/${data[0].slug}`}>
                    <h2 className="text-2xl font-bold mt-3 capitalize">
                      {data[0].title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mt-2 ">{data[0].caption}</p>
                  <div className="text-gray-500 text-sm mt-4">
                    {new Date(data[0].createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            )}

            {data.length >= 2 && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center">
                <div className="w-1/3 h-40 bg-gray-200 relative">
                  <Image
                    src={data[1].image}
                    fill
                    alt={data[1].title}
                    className="object-cover object-center absolute"
                  />
                </div>
                <div className="p-4 flex-1">
                  <span className="text-blue-600 font-semibold text-sm px-3 py-1 bg-blue-100 rounded-full">
                    {data[1].category}
                  </span>
                  <Link href={`/blogs/${data[1].slug}`}>
                    <h3 className="font-semibold mt-2">{data[1].title}</h3>
                  </Link>
                  <p className="text-gray-500 text-xs mt-2">
                    {new Date(data[2].createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {data.length >= 3 && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center">
                <div className="w-1/3 h-40 bg-gray-200 relative">
                  <Image
                    src={data[2].image}
                    fill
                    alt={data[2].title}
                    className="object-cover object-center absolute"
                  />
                </div>
                <div className="p-4 flex-1">
                  <span className="text-blue-600 font-semibold text-sm px-3 py-1 bg-blue-100 rounded-full">
                    {data[2].category}
                  </span>
                  <Link href={`/blogs/${data[2].slug}`}>
                    <h3 className="font-semibold mt-2">{data[2].title}</h3>
                  </Link>
                  <p className="text-gray-500 text-xs mt-2">
                    {new Date(data[2].createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      <section className="con mt-32 md:px-0 px-3">
        <h2 className="md:text-3xl text-2xl text-center text-primary">
          Browse By Category
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Explore our curated collections – from budget makeovers to luxury
          upcycles. Find ideas for every space!
        </p>
        {uniqueCategories.map((category) => (
          <>
            <h2 className="md:text-2xl text-xl con mt-10">
              <span className="bg-secondary/40 rounded-2xl px-5 py-1">
                {category}
              </span>
            </h2>
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start md:p-8 py-8 px-0">
              {"error" in data
                ? null
                : data
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="relative flex flex-col sm:flex-row xl:flex-col items-start"
                      >
                        <div className="order-1 sm:ml-6 xl:ml-0">
                          <h3 className="mb-1 text-slate-900 font-semibold capitalize">
                            <span className="mb-1 block text-sm leading-6 text-secondary">
                              {item.category}
                            </span>
                            <Link href={`/blogs/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <div className="prose prose-slate prose-sm text-slate-600">
                            <p>{item.caption}</p>
                          </div>
                          <div className="mt-6 flex items-center justify-between">
                            <a
                              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-secondary/50 text-primary hover:bg-secondary  focus:ring-slate-500 "
                              href={`/blogs/${item.slug}`}
                            >
                              Read More
                              <span className="sr-only"> {item.title}</span>
                              <RiArrowRightLine size={15} className="ml-2" />
                            </a>
                            <div className="text-sm flex items-center gap-x-2 text-gray-400">
                              <RiCalendar2Fill size={18} />
                              <time
                                dateTime={new Date(
                                  item.createdAt
                                ).toLocaleDateString()}
                                className=""
                              >
                                {new Date(item.createdAt).toLocaleDateString()}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6 shadow-md rounded-lg overflow-hidden h-64 relative bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="absolute object-cover object-center"
                          />
                        </div>
                      </li>
                    ))}
            </ul>
          </>
        ))}
      </section>
    </>
  );
};

export default BlogSection;
