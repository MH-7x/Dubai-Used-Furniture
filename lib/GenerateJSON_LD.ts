import { App } from "@/constants/application";

interface GenerateJSON_LDProps {
  name: string;
  url: string;
  inLanguage: string;
  description: string;

  website: {
    sameAs: string[];
  };
  webpage: {
    thumbnailUrl: string;
    datePublished: string;
    dateModified: string;
  };
  ImageObject: {
    url: string;
    width: number;
    height: number;
    caption: string;
  };
  BreadcrumbList?: {
    itemListElement: {
      name: string;
      position: number;
      url: string;
    }[];
  };
}

export const GenerateJSON_LD = ({
  url,
  name,
  inLanguage,
  description,
  webpage,
  ImageObject,
  BreadcrumbList,
  website,
}: GenerateJSON_LDProps) => {
  const JSONLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url: url,
        name: name,
        isPartOf: {
          "@id": `${url}/#website`,
        },
        about: {
          "@id": `${url}/#organization`,
        },
        primaryImageOfPage: {
          "@id": `${url}/#primaryimage`,
        },
        image: {
          "@id": `${url}/#primaryimage`,
        },
        thumbnailUrl: webpage.thumbnailUrl,
        datePublished: webpage.datePublished,
        dateModified: webpage.dateModified,
        description: description,
        breadcrumb: {
          "@id": `${url}/#breadcrumb`,
        },
        inLanguage: inLanguage,
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [url],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: inLanguage,
        "@id": `${url}/#primaryimage`,
        url: ImageObject.url,
        contentUrl: ImageObject.url,
        width: ImageObject.width,
        height: ImageObject.height,
        caption: ImageObject.caption,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement:
          (BreadcrumbList &&
            BreadcrumbList.itemListElement.map((item) => ({
              "@type": "ListItem",
              position: item.position,
              item: {
                name: item.name,
                "@id": item.url,
              },
            }))) ||
          [],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: url,
        name: name,
        description:
          "Dubai Used Furniture is a trusted buyer and seller of second-hand furniture in Dubai, UAE. We provide competitive prices on used furniture for homes, offices, and hotels while maintaining safety and quality. Contact us for your used furniture needs in Dubai, UAE.",
        publisher: {
          "@id": `${url}/#organization`,
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${url}/search?q={search_term_string}`,
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: inLanguage,
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: name,
        url: url,
        logo: {
          "@type": "ImageObject",
          inLanguage: inLanguage,
          "@id": `${url}/#logo`,
          url: `${App.appUrl}/logo-svg.svg`,
          contentUrl: `${App.appUrl}/logo-svg.svg`,
          width: 400,
          height: 400,
          caption: "Dubai Used Furniture",
        },
        image: {
          "@id": `${url}/#logo`,
        },
        sameAs: website.sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971 54 5019655",
          contactType: "Customer Service",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic"],
        },
      },
    ],
  };

  return JSON.stringify(JSONLD);
};
