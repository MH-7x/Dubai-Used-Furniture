import React from "react";

const BlogsList = () => {
  return (
    <section className="mt-32 con md:px-0 px-3">
      <h2 className="md:text-4xl text-3xl text-primary">
        Latest Posts and Articles
      </h2>
      <p className="mt-5 text-lg max-w-4xl text-gray-600">
        Discover the latest posts and articles about buying and selling used
        furniture in the UAE. Get expert tips, market insights, and the best
        deals on second-hand furniture!
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start md:p-8 py-8 px-0">
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className="relative flex flex-col sm:flex-row xl:flex-col items-start"
          >
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-secondary">
                  Headless UI
                </span>
                Completely unstyled, fully accessible UI components
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  Completely unstyled, fully accessible UI components, designed
                  to integrate beautifully with Tailwind CSS.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Completely unstyled, fully accessible UI components
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="https://img.freepik.com/free-photo/interior-decor-furniture-inspired-by-fruits-vegetables_23-2151361933.jpg?t=st=1739188780~exp=1739192380~hmac=d528cc2e0f338cf9f6f5db39e0d7f4506a08547b0d372e918174f112959de31c&w=740"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogsList;
