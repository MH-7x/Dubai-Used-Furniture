import { RiArrowRightLine, RiCalendar2Fill } from "@remixicon/react";

const BlogsList = () => {
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
              <div className="mt-6 flex items-center justify-between">
                <a
                  className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-secondary/50 text-primary hover:bg-secondary  focus:ring-slate-500 "
                  href=""
                >
                  Learn more
                  <span className="sr-only">
                    , Completely unstyled, fully accessible UI components
                  </span>
                  <RiArrowRightLine size={15} className="ml-2" />
                </a>
                <div className="text-sm flex items-center gap-x-2 text-gray-400">
                  <RiCalendar2Fill size={18} />
                  <time dateTime={"2022-10-11"} className="">
                    2022-10-11
                  </time>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1536437075651-01d675529a6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
