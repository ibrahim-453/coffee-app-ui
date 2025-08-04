import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { menu } from "../slider/MenuSlider";

function MenuSlider() {
  return (
    <div
      className="w-full min-h-[500px] bg-gradient-to-br from-[#fff7ed] to-[#e0c3a3] py-16 px-4"
      id="menu"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#6b4226]">
          Our Delicious Menu
        </h2>

        <div className="relative px-4 sm:px-16">
          <div className="swiper-button-prev-custom hidden sm:flex absolute -left-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#faedcd] hover:scale-110 group border border-gray-200">
            <svg
              className="w-6 h-6 text-[#d4a373] group-hover:text-[#6b4226] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="swiper-button-next-custom hidden sm:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#faedcd] hover:scale-110 group border border-gray-200">
            <svg
              className="w-6 h-6 text-[#d4a373] group-hover:text-[#6b4226] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
          >
            {menu.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl h-[480px]">
                  <div className="relative overflow-hidden h-64">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      src={data.image}
                      alt={data.des}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
                        {data.des}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                        {data.info}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-[#d4a373]">
                        {data.price}
                      </p>
                      <button className="bg-[#d4a373] hover:bg-[#c19660] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-3"></div>
        </div>
      </div>
      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 14px;
          height: 14px;
          background: white;
          opacity: 0.7;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .swiper-pagination-bullet-custom:hover {
          background: #faedcd;
          transform: scale(1.2);
          border-color: #d4a373;
        }
        .swiper-pagination-bullet-active-custom {
          background: #d4a373 !important;
          transform: scale(1.4);
          box-shadow: 0 0 8px rgba(212, 163, 115, 0.5);
          border-color: white;
        }
        .swiper-slide {
          height: auto;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default MenuSlider;
