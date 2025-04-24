"use client";
import { Blog } from "@/app/blogs/[slug]/page";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const LatestPosts = () => {
  const [Posts, setPosts] = React.useState<Blog[] | null>(null);
  const [Loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://blogs.dubaiusedfurniture.ae/api/blog?limit=3"
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (Loading) {
    Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="mt-5 bg-accent/50 rounded-lg w-full p-2 flex items-center gap-x-3"
      >
        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
        <div className="w-[78%] h-4 bg-gray-200 rounded-xl"></div>
      </div>
    ));
  }
  if (!Posts) return null;
  return (
    Posts.length > 0 &&
    Posts.map((post, i) => (
      <Link href={post.slug} key={i} title={post.title}>
        <div className="mt-5 bg-accent/50 rounded-lg w-full p-2 flex items-center gap-x-3">
          <div className="h-16 w-16 rounded-full relative bg-gray-200 overflow-hidden">
            <Image
              src={post.FeaturedImage}
              fill
              alt={post.title}
              className="absolute object-cover object-center"
            />
          </div>
          <h4 className="w-[78%] text-text text-base/5">{post.title}</h4>
        </div>
      </Link>
    ))
  );
};

export default LatestPosts;
