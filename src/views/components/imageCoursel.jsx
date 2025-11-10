import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// ✅ Import your images
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";

const images = [image1, image2, image3, image4, image5, image6, image7];

export default function ImageCarousel() {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="max-w-4xl"
    >
      {images.map((img, index) => (
        <SwiperSlide
          key={index}
          className="w-72 h-96 bg-transparent flex items-center justify-center"
        >
          <img
            src={img}
            alt={`Showcase ${index + 1}`}
            className="rounded-2xl shadow-xl object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
