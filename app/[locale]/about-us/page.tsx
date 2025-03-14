import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import imageSrcOne from "../../../public/images/about-dubai-used-furniture.png";
import imageSrcTwo from "../../../public/images/about-image.jpg";
import storeImage from "../../../public/images/store-image-1.webp";
import storeImage2 from "../../../public/images/store-image-2.webp";
import Image from "next/image";
import type { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "AboutPageMetadata",
  });
}

const AboutUsPage = () => {
  const t = useTranslations("aboutUsPage");
  const list = [
    {
      titleKey: "whyChooseUs.features.0.title",
      descriptionKey: "whyChooseUs.features.0.description",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-5 h-5 text-secondary lg:w-7 lg:h-7"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 122.88 119.62"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M26.24,110.8l7.59-5.87l8.64,4.17l-3.23-9.02l6.64-6.92l-9.58,0.3l-4.54-8.45l-2.69,9.21l-9.45,1.7l7.93,5.4L26.24,110.8 L26.24,110.8L26.24,110.8L26.24,110.8L26.24,110.8z M61.44,119.62l3.63-8.88l9.56-0.71l-7.31-6.2l2.29-9.32l-8.16,5.05l-8.16-5.05 l2.29,9.32l-7.33,6.2l9.56,0.71L61.44,119.62L61.44,119.62L61.44,119.62L61.44,119.62L61.44,119.62z M33.17,52.47 c4.44-1.66,10.11-3.78,14.19-6.31c4.68,4.34,7.72,9.28,7.96,15.28H67.6c0.24-6,3.28-10.94,7.96-15.28 c4.08,2.53,9.75,4.64,14.19,6.31c13.08,4.89,6.69,13.82-0.94,21.34c-7,6.89-16.67,11.15-27.36,11.15S41.1,80.71,34.09,73.81 C26.57,66.4,20,57.39,33.17,52.47L33.17,52.47z M51.82,40.06c0.2-1.64-4.64-7.85-5.52-10.84c-1.9-3-2.57-7.8-0.5-10.98 c0.83-1.26,0.47-3.52,0.47-5.25c0-17.31,30.33-17.33,30.33,0c0,2.19-0.5,3.86,0.69,5.58c1.99,2.88,0.96,7.99-0.72,10.67 c-1.07,3.13-6.15,9.06-5.79,10.84C71.08,48.95,51.75,48.66,51.82,40.06L51.82,40.06L51.82,40.06L51.82,40.06z M122.88,84.55 l-5.87-7.58l4.17-8.64l-9.03,3.24l-6.92-6.64l0.3,9.58l-8.45,4.54l9.21,2.68l1.7,9.45l5.39-7.93L122.88,84.55L122.88,84.55 L122.88,84.55L122.88,84.55L122.88,84.55z M96.64,110.8l-1.29-9.51l7.93-5.4l-9.44-1.71l-2.68-9.21l-4.54,8.45l-9.59-0.3l6.64,6.92 l-3.26,9.04l8.64-4.17L96.64,110.8L96.64,110.8L96.64,110.8L96.64,110.8L96.64,110.8z M0,84.54l9.51-1.29l5.4,7.93l1.71-9.44 l9.21-2.68l-8.45-4.54l0.3-9.58l-6.93,6.64L1.7,68.33l4.17,8.64L0,84.54L0,84.54L0,84.54L0,84.54L0,84.54z"
              fill="#fd990d"
            />
          </g>
        </svg>
      ),
    },
    {
      titleKey: "whyChooseUs.features.1.title",
      descriptionKey: "whyChooseUs.features.1.description",
      icon: (
        <svg
          fill="#fd990d"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 209 256"
          className="w-5 h-5 text-secondary lg:w-7 lg:h-7"
          enableBackground="new 0 0 209 256"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M120.523,2l-1.877,23.625H96.625v78.681h-2.458c-14.746,0-28.129,8.628-34.214,22.06L2.125,254h78.75l5.07-16.892 C122.588,225.945,132.216,191,132.216,191h51.034v-18.12l10.529,0.837L206.875,8.861L120.523,2z M175.375,166.606 c-7.757,2.097-13.697,8.53-15.077,16.519h-44.767c-2.957,15.124-14.146,28.884-29.224,35.043c-0.487,0.199-0.992,0.293-1.488,0.293 c-1.552,0-3.023-0.924-3.647-2.449c-0.822-2.013,0.143-4.311,2.156-5.134c14.782-6.038,25.106-20.689,25.106-35.628 c0-0.007,0.002-3.938,0.002-3.938h40.032c5.948,0,11.048-4.654,11.154-10.601c0.108-6.056-4.765-10.996-10.797-11.006l-70.906-0.049 c-2.174,0-3.938-1.763-3.938-3.938s1.763-3.938,3.938-3.938h26.58V49.236c7.999-1.632,14.288-7.837,16.1-15.736h38.987 c1.791,7.83,7.972,13.941,15.789,15.668V166.606z M187.86,148.775c-1.608,0.301-3.149,0.796-4.61,1.446V25.625h-53.998 c6.856-1.808,12.395-7.039,14.546-13.876l38.864,3.088c1.166,7.947,6.842,14.528,14.498,16.868L187.86,148.775z M167.696,107.404 c0.028-15.077-12.011-27.764-27.692-27.793c-15.077-0.028-27.766,12.614-27.793,27.692c-0.028,15.077,12.011,27.764,27.692,27.793 C154.98,135.124,167.668,122.482,167.696,107.404z M123.666,109.737l-4.825-0.009l0.01-5.428l4.222,0.008 c0.004-2.413,1.216-5.426,1.823-7.837l6.028,1.821c-0.605,1.205-1.213,3.616-1.22,7.235c-0.005,3.015,1.197,4.827,3.007,4.831 s3.019-1.804,4.836-6.022c2.423-6.027,4.841-9.038,9.666-9.028c4.221,0.611,7.832,4.236,9.031,9.063l4.825,0.009l-0.01,5.428 l-4.222-0.008c-0.005,2.413-1.22,7.235-1.826,9.043l-6.028-1.821c1.21-1.807,2.422-5.423,2.428-8.439 c0.006-3.619-1.196-5.43-3.609-5.434c-1.809-0.004-3.018,1.201-4.835,5.419c-1.819,5.424-4.842,9.641-9.667,9.632 C128.475,118.189,124.861,115.166,123.666,109.737z" />
          </g>
        </svg>
      ),
    },
    {
      titleKey: "whyChooseUs.features.2.title",
      descriptionKey: "whyChooseUs.features.2.description",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="#fd990d"
          className="w-5 h-5 text-secondary lg:w-7 lg:h-7"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M678.584675 765.172506v157.995691l75.697852 31.505938V723.768586a429.379161 429.379161 0 0 1-75.697852 41.40392zM269.717473 723.768586V953.098138l75.697852-31.505938v-156.419694a429.309162 429.309162 0 0 1-75.697852-41.40392zM511.999 798.78444a428.955162 428.955162 0 0 1-105.993793-13.241974v238.457534L511.999 979.886086 617.992793 1023.998V785.542466A429.025162 429.025162 0 0 1 511.999 798.78444zM511.999 0C308.479398 0 142.903721 165.575677 142.903721 369.097279S308.479398 738.192558 511.999 738.192558s369.097279-165.575677 369.097279-369.097279S715.520602 0 511.999 0z m0 660.198711c-161.345685 0-292.611428-131.265744-292.611428-292.611429 0-161.347685 131.265744-292.613428 292.611428-292.613428s292.611428 131.265744 292.611428 292.613428c0 161.347685-131.263744 292.611428-292.611428 292.611429zM511.999 135.563735c-127.93575 0-232.021547 104.083797-232.021547 232.023547S384.06325 599.606829 511.999 599.606829s232.021547-104.083797 232.021547-232.021547c0-127.93775-104.083797-232.021547-232.021547-232.021547zM607.360814 502.999018L511.999 452.865115 416.639186 502.999018l18.211965-106.183793-77.14785-75.199853 106.617792-15.49397L511.999 209.509591l47.679907 96.611811 106.617792 15.49397-77.14785 75.199853 18.211965 106.183793z"></path>
          </g>
        </svg>
      ),
    },
    {
      titleKey: "whyChooseUs.features.3.title",
      descriptionKey: "whyChooseUs.features.3.description",
      icon: (
        <svg
          fill="#fd990d"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 496 496"
          className="w-5 h-5 text-secondary lg:w-7 lg:h-7"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <g>
                  <path d="M464,112.808v-36.12L387.312,0H160v112H40c-22.056,0-40,17.944-40,40v256c0,22.056,17.944,40,40,40h96v32h-32v16h288v-16 h-32v-32h96c22.056,0,40-17.944,40-40V152C496,132.688,482.232,116.528,464,112.808z M384,19.312L444.688,80H384V19.312z M176,16 h192v80h80v256H176V16z M344,480H152v-32h192V480z M480,408c0,13.232-10.768,24-24,24H40c-13.232,0-24-10.768-24-24v-8h464V408z M480,384H16V152c0-13.232,10.768-24,24-24h120v240h304V129.472c9.288,3.312,16,12.112,16,22.528V384z"></path>
                  <path d="M144,200c0-30.872-25.128-56-56-56s-56,25.128-56,56s25.128,56,56,56S144,230.872,144,200z M96,184c0,4.416-3.584,8-8,8 s-8-3.584-8-8s3.584-8,8-8S96,179.584,96,184z M88,240c-5.56,0-10.856-1.152-15.672-3.216C73.816,229.504,80.28,224,88,224 c7.72,0,14.184,5.504,15.672,12.784C98.856,238.848,93.56,240,88,240z M88,208c-13.056,0-24.264,7.872-29.232,19.104 C52.144,219.96,48,210.48,48,200c0-20.4,15.408-37.096,35.168-39.512C72.24,162.728,64,172.424,64,184 C64,197.232,74.768,208,88,208s24-10.768,24-24c0-11.576-8.24-21.272-19.168-23.512C112.592,162.904,128,179.6,128,200 c0,10.48-4.144,19.96-10.768,27.104C112.264,215.872,101.056,208,88,208z"></path>
                  <path d="M32,312c0,30.872,25.128,56,56,56s56-25.128,56-56s-25.128-56-56-56S32,281.128,32,312z M88,352 c-5.56,0-10.856-1.152-15.672-3.216C73.816,341.504,80.28,336,88,336c7.72,0,14.184,5.504,15.672,12.784 C98.856,350.848,93.56,352,88,352z M96,296c0,4.416-3.584,8-8,8s-8-3.584-8-8c0-4.416,3.584-8,8-8S96,291.584,96,296z M83.168,272.488C72.24,274.728,64,284.424,64,296c0,13.232,10.768,24,24,24s24-10.768,24-24c0-11.576-8.24-21.272-19.168-23.512 C112.592,274.904,128,291.6,128,312c0,10.48-4.144,19.96-10.768,27.104C112.264,327.872,101.056,320,88,320 c-13.056,0-24.264,7.872-29.232,19.104C52.144,331.96,48,322.48,48,312C48,291.6,63.408,274.904,83.168,272.488z"></path>
                  <path d="M288,63.312V48h-80v80h80V82.968l28.648-20.464l-9.296-13.016L288,63.312z M272,74.744l-15.136,10.808l-11.208-11.208 l-11.312,11.312l20.792,20.792L272,94.4V112h-48V64h48V74.744z"></path>
                  <path d="M288,159.312V144h-80v80h80v-45.032l28.648-20.464l-9.296-13.016L288,159.312z M272,170.744l-15.136,10.808 l-11.208-11.208l-11.312,11.312l20.792,20.792L272,190.4V208h-48v-48h48V170.744z"></path>
                  <path d="M288,255.312V240h-80v80h80v-45.032l28.648-20.464l-9.296-13.008L288,255.312z M272,266.744l-15.136,10.808 l-11.208-11.208l-11.312,11.312l20.792,20.792L272,286.4V304h-48v-48h48V266.744z"></path>
                  <rect x="320" y="112" width="96" height="16"></rect>
                  <rect x="320" y="208" width="96" height="16"></rect>
                  <rect x="320" y="304" width="96" height="16"></rect>
                  <rect x="320" y="272" width="96" height="16"></rect>
                  <rect x="320" y="176" width="96" height="16"></rect>
                  <rect x="320" y="80" width="32" height="16"></rect>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      titleKey: "whyChooseUs.features.4.title",
      descriptionKey: "whyChooseUs.features.4.description",
      icon: (
        <svg
          fill="#fd990d"
          height="200px"
          width="200px"
          version="1.1"
          className="w-5 h-5 text-secondary lg:w-7 lg:h-7"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 405.357 405.357"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M394.357,204.417c-1.216-0.238-23.027-4.458-52.295-6.616c0.142-2.689,0.217-5.396,0.217-8.121 c0-84.192-68.496-152.688-152.688-152.688c-84.193,0-152.69,68.496-152.69,152.688c0,17.751,3.056,34.798,8.649,50.659 c-19.522,1.643-33.711,4.388-34.55,4.553l-11,2.157l4.791,10.134c1.477,3.125,36.686,76.783,80.787,99.065 c15.915,8.04,30.8,12.117,44.243,12.119c0.003,0,0.004,0,0.006,0c20.021,0,36.416-9.044,46.732-25.609 c13.534,16.171,32.582,24.884,55.124,24.884c17.957,0,37.921-5.485,59.336-16.304c59.619-30.122,107.536-130.375,109.547-134.629 l4.791-10.134L394.357,204.417z M315.388,140.031c-5.755-4.712-12.383-9.122-19.845-13.163c-9.235-5.002-19.452-9.262-30.387-12.751 c-3.489-10.937-7.749-21.154-12.753-30.391c-4.041-7.461-8.45-14.089-13.163-19.844C273.94,77.627,301.645,105.332,315.388,140.031z M323.705,180.955h-47.559c-0.501-16.042-2.389-31.621-5.546-46.289C298.94,145.74,318.893,162.32,323.705,180.955z M198.316,55.565 c18.636,4.813,35.216,24.767,46.291,53.107c-14.669-3.157-30.247-5.044-46.291-5.546V55.565z M198.316,120.582 c18.761,0.646,36.62,3.355,52.694,7.679c4.324,16.075,7.033,33.933,7.68,52.693h-60.374V120.582z M198.316,198.405h60.374 c-0.027,0.771-0.056,1.542-0.089,2.31c-14.552,2.7-27.128,6.702-37.613,11.999c-8.372,4.229-15.931,8.743-22.672,13.527V198.405z M180.865,55.565v47.561c-16.043,0.502-31.622,2.389-46.291,5.546C145.649,80.332,162.23,60.378,180.865,55.565z M180.865,120.582 v60.373h-60.374c0.646-18.76,3.355-36.619,7.68-52.694C144.245,123.937,162.105,121.229,180.865,120.582z M139.94,63.884 c-4.713,5.755-9.122,12.383-13.163,19.844c-5.003,9.236-9.263,19.454-12.752,30.39c-10.937,3.49-21.153,7.749-30.39,12.752 c-7.461,4.041-14.089,8.45-19.844,13.162C77.536,105.331,105.24,77.627,139.94,63.884z M108.581,134.665 c-3.157,14.669-5.045,30.247-5.546,46.29H55.475C60.287,162.32,80.241,145.74,108.581,134.665z M103.035,198.405 c0.468,14.964,2.138,29.525,4.922,43.321c-2.989-0.499-6.083-0.929-9.283-1.284c-23.04-10.862-38.97-25.656-43.199-42.037H103.035z M157.417,339.265c-5.787,6.386-14.519,11.65-27.59,11.65h-0.004c-10.685-0.001-22.924-3.447-36.376-10.243 c-29.693-15.003-56.48-60.004-67.527-80.536c11.003-1.574,28.615-3.564,47.309-3.564c24.886,0,44.258,3.412,57.579,10.142 c12.003,6.063,21.188,12.85,27.489,20.163c-1.253,12.721,1.173,25.744,7.249,38.511l-88.215-41.304L157.417,339.265z M145.958,255.082c-2.332-1.349-4.753-2.666-7.282-3.944c-3.584-1.811-7.507-3.408-11.727-4.812 c-3.612-14.809-5.874-30.997-6.458-47.922h60.374v42.683c-5.185,5.374-9.511,11.015-12.972,16.91 C160.374,257.346,153.042,256.365,145.958,255.082z M283.15,335.761c-18.952,9.575-36.269,14.429-51.467,14.429 c-20.277,0-33.407-8.66-41.821-18.749l121.154-77.605l-128.918,65.723c-0.026-0.052-0.055-0.105-0.081-0.157 c-17.251-34.151-0.178-67.36,46.84-91.112c18.769-9.482,45.89-14.29,80.61-14.29c28.598,0,55.445,3.379,70.071,5.613 C365.815,245.721,326.911,313.652,283.15,335.761z"></path>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <main className="md:mt-24 mt-28">
      {/* About Section */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-700 sm:text-lg">
            <h1 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-primary">
              {t("about.mainHeading")}
            </h1>
            <p className="mb-4 text-xl">{t("about.introParagraph")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-full rounded-lg bg-secondary/50 relative h-96">
              <Image
                src={imageSrcOne}
                fill
                alt="About Company (Dubai Used Furniture)"
                loading="eager"
                placeholder="blur"
                className="absolute object-cover object-center"
              />
            </div>
            <div className="mt-4 w-full lg:mt-10 rounded-lg bg-secondary/50 h-96 relative overflow-hidden">
              <Image
                src={imageSrcTwo}
                fill
                alt="Inner store view of Dubai Used Furniture"
                loading="eager"
                placeholder="blur"
                className="absolute object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Description */}
      <p className="max-w-screen-xl md:p-16 py-16 px-3 md:text-3xl text-xl font-light text-primary">
        {t("about.description")}
      </p>

      {/* Why Choose Us Section */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-primary">
              {t("whyChooseUs.heading")}
            </h2>
            <p className="text-gray-500 sm:text-xl">
              {t("whyChooseUs.subheading")}
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {list.map((item) => (
              <div key={item.titleKey}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{t(item.titleKey)}</h3>
                <p className="text-gray-600">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-32">
        <h2 className="md:text-4xl text-3xl font-bold text-primary text-center">
          {t("services.heading")}
        </h2>
        <p className="max-w-4xl text-gray-600 mt-3 text-center text-lg mx-auto px-3">
          {t("services.subheading")}
        </p>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 con gap-10 px-3">
          <div className="p-10 border border-secondary rounded-xl">
            <h3 className="text-2xl text-primary">
              {t("services.list.0.title")}
            </h3>
            <p className="text-gray-500 mt-3">
              {t("services.list.0.description")}
            </p>
          </div>
          <div className="p-10 border border-secondary rounded-xl">
            <h3 className="text-2xl text-primary">
              {t("services.list.1.title")}
            </h3>
            <p className="text-gray-500 mt-3">
              {t("services.list.1.description")}
            </p>
          </div>
          <div className="p-10 border border-secondary rounded-xl">
            <h3 className="text-2xl text-primary">
              {t("services.list.2.title")}
            </h3>
            <p className="text-gray-500 mt-3">
              {t("services.list.2.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mt-32">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-full rounded-lg bg-secondary/50 relative md:h-96 h-80 overflow-hidden">
              <Image
                src={storeImage}
                fill
                alt="Used Furniture Store in uae"
                loading="eager"
                placeholder="blur"
                className="absolute object-cover object-center"
              />
            </div>
            <div className="mt-4 w-full lg:mt-10 rounded-lg bg-secondary/50 md:h-96 h-80 relative overflow-hidden">
              <Image
                src={storeImage2}
                fill
                alt="dubai used furniture store view in uae"
                loading="eager"
                placeholder="blur"
                className="absolute object-cover object-center"
              />
            </div>
          </div>
          <div className="font-light text-gray-700 sm:text-lg">
            <h2 className="mb-4 md:text-4xl text-3xl md:mt-0 mt-10 tracking-tight font-extrabold text-primary">
              {t("location.heading")}
            </h2>
            <p className="mb-4 text-xl">{t("location.description")}</p>
            <div className="mt-10 flex gap-x-4">
              <Button size={"lg"}>{t("location.buttons.callToUs")}</Button>
              <Button size={"lg"} variant={"secondary"}>
                {t("location.buttons.viewOurServices")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="mt-32 text-center max-w-4xl mx-auto bg-secondary rounded-2xl md:p-16 px-3 py-10">
        <h2 className="md:text-4xl text-3xl text-primary font-bold">
          {t("sustainability.heading")}
        </h2>
        <p className="text-xl font-light mt-7 text-text">
          {t("sustainability.description")}
        </p>
      </section>

      {/* Trust Section */}
      <section className="mt-32 text-center max-w-4xl mx-auto bg-accent rounded-2xl md:p-16 px-3 py-10">
        <h2 className="md:text-4xl text-3xl text-primary font-bold">
          {t("trust.heading")}
        </h2>
        <p className="text-xl font-light mt-7 text-text">
          {t("trust.description")}
        </p>
      </section>
    </main>
  );
};

export default AboutUsPage;
