import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

//----------------------------------------------
const Carousel = ({ children, className, config, ref }) => {
  const slides = Array(2).fill(
    children.map((slide, index) => (
      <SwiperSlide key={index}>{slide}</SwiperSlide>
    ))
  );

  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      speed={1000}
      slidesPerView="auto"
      loop={true}
      className={className}
      centeredSlides={true}
      onBeforeInit={(swiper) => {
        ref.current = swiper;
      }}
      {...config}
    >
      {slides}
    </Swiper>
  );
};

export default Carousel;
