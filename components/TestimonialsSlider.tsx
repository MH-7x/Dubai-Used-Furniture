"use client";

import { RiStarFill } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";

const TestimonialSlider: React.FC = () => {
  const t = useTranslations("testimonials");
  return (
    <section className="mt-40 md:mb-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm text-gray-500 font-medium block mb-2">
            {t("sub")}
          </span>
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900">
            {t("title")}
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 32 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="mySwiper"
        >
          {t.raw("sharjahPageTestimonials").map(
            (
              review: {
                cus_name: string;
                cus_message: string;
                cus_rating: string;
                cus_avatar: string;
              },
              i: number
            ) => (
              <SwiperSlide key={i}>
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-secondary hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <RiStarFill />
                      <span className="text-base font-semibold text-primary">
                        {review.cus_rating}
                      </span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 pb-8 group-hover:text-gray-800">
                      {review.cus_message}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      loading="lazy"
                      src={review.cus_avatar}
                      alt={`${review.cus_name} avatar`}
                    />
                    <div>
                      <h5 className="text-gray-900 font-medium mb-1">
                        {review.cus_name}
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
