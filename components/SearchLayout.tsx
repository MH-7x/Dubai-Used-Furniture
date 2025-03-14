"use client";
import List from "@/constants/SearchItems";
import {
  RiFile2Line,
  RiSearch2Fill,
  RiSearchFill,
  RiSearchLine,
} from "@remixicon/react";
import { useCycle, motion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";

const SearchLayout = ({ forMobile = false }: { forMobile?: boolean }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [Query, setQuery] = useState("");
  const [Results, setResults] = useState<
    { title: string; link: string; desc: string }[]
  >([]);
  const [RandomItems, setRandomItems] = useState<
    { title: string; link: string; desc: string }[]
  >([]);

  const search = useCallback((query: string) => {
    const results = List.filter((item) => {
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.link.toLowerCase().includes(query.toLowerCase())
      );
    });
    setResults(results);
  }, []);

  const getRandomItems = (
    list: { title: string; link: string; desc: string }[],
    count = 4
  ) => {
    if (list.length <= count) return list;

    const indices = new Set();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * list.length));
    }

    return Array.from(indices).map((index) => list[index as number]);
  };

  useEffect(() => {
    const randomItems = getRandomItems(List, 4);
    setRandomItems(randomItems);
  }, []);

  return (
    <>
      {forMobile ? (
        <button
          aria-label="search"
          onClick={() => {
            toggleOpen();
            console.log("clicked");
          }}
          className="w-8 h-8 flex items-center justify-center text-secondary"
        >
          <RiSearchLine aria-label="search" className="w-5 h-5" />
        </button>
      ) : (
        <Button
          onClick={() => {
            toggleOpen();
          }}
          size={"icon"}
          className="bg-white rounded-full"
          variant={"default"}
          aria-label="search"
        >
          <RiSearchFill aria-label="search" />
        </Button>
      )}

      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`fixed top-0 left-0 w-full h-screen ${
            isOpen ? "z-[100]" : "-z-40"
          } bg-black/20 backdrop-blur-lg`}
        >
          <button
            onClick={() => toggleOpen()}
            className="py-1 px-2 text-2xl absolute top-3 right-3 text-white drop-shadow"
          >
            ✖
          </button>

          <div className="md:w-[450px] w-11/12 h-[70%] mt-20 bg-white mx-auto py-5 px-3">
            <h3 className="text-xl text-center text-primary tracking-wide">
              Search Here
            </h3>

            <div className="w-full flex gap-x-2 mt-4 relative">
              <input
                value={Query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  search(e.target.value);
                }}
                className="bg-accent w-full pt-3 pb-2 border-b outline-none border-secondary pr-2 pl-8 placeholder:text-gray-400 text-gray-600"
                placeholder="search i.e home furniture"
              />
              <RiSearch2Fill
                className="absolute top-3 text-secondary left-2"
                size={18}
              />
            </div>

            <p className="mt-8 mb-2 text-gray-600">
              {Query ? `Results for "${Query}"` : "Quick to go"}
            </p>

            {/* Render Random Items */}
            <div className="overflow-y-scroll flex flex-col gap-y-3 h-[60%]">
              {Query === "" ? (
                RandomItems.map(
                  (item: { title: string; link: string; desc: string }) => (
                    <div
                      key={item.title}
                      className="w-full bg-accent p-3 grid grid-cols-5 gap-x-3"
                    >
                      <div className="col-span-1 flex items-center justify-center bg-white text-secondary h-12">
                        <RiFile2Line />
                      </div>
                      <div className="col-span-4">
                        <p className="text-primary line-clamp-1">
                          {item.title}
                        </p>
                        <p className="text-xs/3 text-gray-500 font-light line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                )
              ) : Results.length > 0 ? (
                Results.map((item) => (
                  <div
                    key={item.title}
                    className="w-full bg-accent p-3 grid grid-cols-5 gap-x-3"
                  >
                    <div className="col-span-1 flex items-center justify-center bg-white text-secondary h-12">
                      <RiFile2Line />
                    </div>
                    <div className="col-span-4">
                      <p className="text-primary line-clamp-1">{item.title}</p>
                      <p className="text-xs/3 text-gray-500 font-light line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p className="mt-3 text-center text-red-500">
                    {`No Results Found For ${Query}`}
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default SearchLayout;
