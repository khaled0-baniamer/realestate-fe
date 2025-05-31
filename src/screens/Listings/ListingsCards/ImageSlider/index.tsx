import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { NumberIndicator } from "./NumberIndicator";
import { useState } from "react";
type Props = {
  images: string[];
};

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <>
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex + 1);
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              loading={index === 0 ? "eager" : "lazy"}
              src={img}
              key={index}
              className="rounded-2xl w-full h-60 object-cover"
              alt={`image- ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <NumberIndicator
        currentImage={currentSlide}
        totalImages={images?.length}
      />
    </>
  );
};

export default ImageSlider;
