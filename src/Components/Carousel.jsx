import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { useRef } from "react";
import "swiper/css/navigation";

//----------------------------------------------
const Carousel = ({ children, className, config, styles, buttons = true }) => {
  const ref = useRef(null);

  const slides = Array(2).fill(
    children?.map((slide, index) => (
      <SwiperSlide key={index} className={styles?.slide}>
        {slide}
      </SwiperSlide>
    ))
  );

  return (
    <>
      <Swiper
        {...config}
        onBeforeInit={(swiper) => {
          ref.current = swiper;
        }}
        className={className}
      >
        {slides}
      </Swiper>

      {buttons && (
        <div className="flex items-center justify-center gap-16 mt-8">
          <CiCircleChevLeft
            onClick={() => ref?.current?.slidePrev()}
            className="text-[--body-text] text-5xl support-hover:hover:cursor-pointer support-hover:hover:text-black transition-colors duration-300 rounded-full"
          />
          <CiCircleChevRight
            onClick={() => ref?.current?.slideNext()}
            className="text-5xl support-hover:hover:cursor-pointer support-hover:hover:text-black transition-colors duration-300"
          />
        </div>
      )}
    </>
  );
};

export default Carousel;
