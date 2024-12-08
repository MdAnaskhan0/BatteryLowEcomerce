import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerImg1 from "../assets/bg-01-free-img.jpg";
import BannerImg2 from "../assets/bg-01-free-img2.jpg";
import BannerImg3 from "../assets/bg-01-free-img3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: BannerImg1,
      title: "Shop the Latest Trends",
      description: "Discover the best deals on fashion, electronics, and more!",
    },
    {
      id: 2,
      image: BannerImg2,
      title: "Upgrade Your Tech Game",
      description:
        "Get the latest gadgets and electronics at unbeatable prices!",
    },
    {
      id: 3,
      image: BannerImg3,
      title: "Fresh Styles, Fresh Looks",
      description:
        "Find your next outfit with our curated fashion collections!",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-5 pt-10 rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={3000}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="w-full h-80 md:h-96 lg:h-[600px] xl:h-[700px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            {/* Banner Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-2xl mb-6">{banner.description}</p>
                <Link
                  to="/products"
                  className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
