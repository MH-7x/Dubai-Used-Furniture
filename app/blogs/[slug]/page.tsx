import { App } from "@/constants/application";
import { RiCalendarCheckFill } from "@remixicon/react";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

interface Main {
  message: string;
  success: boolean;
  blog: Blog;
}

interface Blog {
  author: Author;
  seo: SEO;
  _id: string;
  title: string;
  caption: string;
  category: string;
  FeaturedImage: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface Author {
  name: string;
  avatarUrl: string;
}

interface SEO {
  metaTitle: string;
  metaDescription: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const BlogDetails = await getBlogDetails(decodeURIComponent(slug));
  if ("error" in BlogDetails) {
    return {
      title: "Error",
      description: "Error",
    };
  }
  return {
    title: BlogDetails.seo.metaTitle,
    description: BlogDetails.seo.metaDescription,
    alternates: {
      canonical: `${App.appUrl}/blogs/${slug}`,
    },
    applicationName: "Dubai Used Furniture",
    authors: {
      name: BlogDetails.author.name,
    },
    category: BlogDetails.category,
    openGraph: {
      title: BlogDetails.seo.metaTitle,
      description: BlogDetails.seo.metaDescription,
      type: "article",
      authors: BlogDetails.author.name,
      countryName: "United Arab Emirates",
      images: [
        {
          url: BlogDetails.FeaturedImage,
          alt: BlogDetails.title,
        },
      ],
      publishedTime: new Date(BlogDetails.createdAt).toISOString(),
      siteName: "Dubai Used Furniture",
      url: `${App.appUrl}/blogs/${slug}`,
    },
    robots: {
      "max-image-preview": "large",
      follow: true,
      index: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    twitter: {
      card: "summary_large_image",
      site: "@dubaiusedfurn",
      creator: "@dubaiusedfurn",
    },
  };
}

async function getBlogDetails(slug: string): Promise<Blog | { error: string }> {
  try {
    const response = await fetch(
      `https://blogs.dubaiusedfurniture.ae/api/blog?slug=${slug}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error(
        `Failed To Load Blog Content - ${response.status} - ${response.statusText}`
      );
    }
    const result: Main = await response.json();
    if (!result.success) {
      throw new Error(result.message);
    }
    return result.blog;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "something went wrong!",
    };
  }
}

const SingleBlogDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const BlogDetails = await getBlogDetails(decodeURIComponent(slug));

  if ("error" in BlogDetails) {
    return (
      <div>
        <header className="md:mt-24 py-10 mt-[75px] md:bg-secondary/40">
          <div className="max-w-6xl mx-auto md:p-4">
            <div className="bg-red-100 rounded-2xl md:shadow-lg overflow-hidden flex flex-col items-center">
              <h2 className="text-center text-destructive">
                {BlogDetails.error}
              </h2>
            </div>
          </div>
        </header>
      </div>
    );
  }
  return (
    <>
      <header className="md:mt-24 py-10 mt-[75px] md:bg-accent/40">
        <div className="max-w-6xl mx-auto md:p-4">
          <div className="bg-white rounded-2xl md:shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="md:w-1/3 w-full relative md:h-96 h-80 bg-muted">
              <Image
                src={BlogDetails.FeaturedImage}
                alt={BlogDetails.title}
                fill
                className="object-center object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="md:p-6 py-6 px-3 md:w-2/3">
              <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                {BlogDetails.category}
              </span>
              <h2 className="md:text-3xl text-2xl font-bold text-primary mt-3 capitalize">
                {BlogDetails.title}
              </h2>
              <p className="text-gray-600 text-lg mt-4">
                {BlogDetails.caption}
              </p>

              {/* Author & Date */}
              <div className="flex items-center mt-4 text-gray-500 text-sm">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
                <span className="ml-2 font-medium">
                  {BlogDetails.author.name}
                </span>
                <span className="ml-4 flex items-center gap-x-1">
                  <RiCalendarCheckFill size={18} />{" "}
                  {new Date(BlogDetails.createdAt).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="grid md:grid-cols-3 grid-cols-1 con min-h-screen mt-24 items-start">
        <main
          dangerouslySetInnerHTML={{ __html: BlogDetails.content }}
          className="col-span-2  min-h-screen md:pr-10 blog"
        ></main>
        <aside className="col-span-1">
          <div className="border-accent border rounded-xl min-h-40 p-5">
            <h3 className="font-bold text-xl text-text">Latest Posts</h3>
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="mt-5 bg-accent/50 rounded-lg w-full p-2 flex items-center gap-x-3">
                <div className="h-16 w-16 rounded-full bg-gray-200"></div>
                <h4 className="w-[78%] text-text text-base/5">
                  How To Sell Used Furniture Easily in Dubai - best market
                  places
                </h4>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default SingleBlogDetailPage;
