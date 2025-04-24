import List from "@/constants/SearchItems";
import { Link } from "@/i18n/routing";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  return MetadataTemplate({
    namespace: "SitemapPageMetadata",
    locale,
  });
}
export default function Sitemap() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-5 flex flex-col items-center md:mt-24 mt-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Sitemap</h1>
      <p className="text-gray-600 mb-4">Explore our website pages below:</p>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6">
        <ul className="space-y-4">
          <li>
            <Link
              href={"/"}
              className={`block p-3 rounded-lg text-lg font-medium transition-all hover:bg-blue-500 hover:text-white
                 text-gray-700`}
            >
              Home
              <span className="text-gray-500 text-sm block mt-1">
                Go to the homepage
              </span>
            </Link>
          </li>
          {List.map((item, index) => (
            <li key={item.title + index}>
              {item.link === "/blogs" ? (
                <a
                  href={"/blogs"}
                  className={`block p-3 rounded-lg text-lg font-medium transition-all hover:bg-blue-500 hover:text-white
                 text-gray-700`}
                >
                  {item.title}
                  <span className="text-gray-500 text-sm block mt-1">
                    {item.desc}
                  </span>
                </a>
              ) : (
                <Link
                  href={item.link}
                  className={`block p-3 rounded-lg text-lg font-medium transition-all hover:bg-blue-500 hover:text-white
                 text-gray-700`}
                >
                  {item.title}
                  <span className="text-gray-500 text-sm block mt-1">
                    {item.desc}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
