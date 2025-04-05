"use client";
import { Category } from "@/app/blogs/[slug]/page";
import { RiArrowRightLine, RiCalendar2Fill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Main {
  success: boolean;
  message: string;
  data: Datum[];
  pagination: Pagination;
}

interface Datum {
  _id: string;
  title: string;
  caption: string;
  category: Category;
  FeaturedImage: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Simple in-memory cache
const blogCache = new Map<string, { data: Datum[]; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000;

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Datum[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      const cacheKey = "latestBlogs";
      const cachedData = blogCache.get(cacheKey);

      if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
        setBlogs(cachedData.data);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://blogs.dubaiusedfurniture.ae/api/blog?limit=3"
        );

        if (!response.ok) {
          const message = `An error occurred: ${response.status}`;
          throw new Error(message);
        }

        const data: Main = await response.json();

        if (data.success) {
          setBlogs(data.data);
          blogCache.set(cacheKey, { data: data.data, timestamp: Date.now() });
        } else {
          setError(data.message || "Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!loading && blogs.length === 0 && !error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p>No blogs found</p>
      </div>
    );
  }

  return (
    <section dir="ltr" className="mt-32 con md:px-0 px-3">
      <h2 className="md:text-4xl text-3xl text-primary">
        Latest Posts and Articles
      </h2>
      <p className="mt-5 text-lg max-w-4xl text-gray-600">
        Discover the latest posts and articles about buying and selling used
        furniture in the UAE. Get expert tips, market insights, and the best
        deals on second-hand furniture!
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start md:p-8 py-8 px-0 mt-10">
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="relative flex flex-col sm:flex-row xl:flex-col items-start"
          >
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold capitalize">
                <span className="mb-1 block text-sm leading-6 text-secondary">
                  {blog.category.name}
                </span>
                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>{blog.caption}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Link
                  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-secondary/50 text-primary hover:bg-secondary  focus:ring-slate-500 "
                  href={`/blogs/${blog.slug}`}
                >
                  Read More
                  <span className="sr-only">{blog.title}</span>
                  <RiArrowRightLine size={15} className="ml-2" />
                </Link>
                <div className="text-sm flex items-center gap-x-2 text-gray-400">
                  <RiCalendar2Fill size={18} />
                  <time
                    dateTime={new Date(blog.createdAt).toDateString()}
                    className=""
                  >
                    {new Date(blog.createdAt).toDateString()}
                  </time>
                </div>
              </div>
            </div>
            <div className="mb-6 shadow-md rounded-lg h-64 overflow-hidden relative bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full">
              <Image
                src={blog.FeaturedImage}
                alt={blog.title}
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogsList;
