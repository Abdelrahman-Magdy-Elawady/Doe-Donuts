import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

/*-------------------------------------------------*/
const Marquee = ({ children, config, className, slidesCount = 3 }) => {
  const slides = Array(slidesCount)
    .fill(0)
    .map((_, index) => (
      <SwiperSlide key={index} className="w-auto">
        {children}
      </SwiperSlide>
    ));

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        allowTouchMove: false,
      }}
      speed={10000}
      slidesPerView="auto"
      loop={true}
      freeMode={true}
      direction="horizontal"
      {...config}
      className={className}
    >
      {slides}
    </Swiper>
  );
};

export default Marquee;
