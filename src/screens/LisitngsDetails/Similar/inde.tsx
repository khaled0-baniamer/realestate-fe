import { ListingCard } from "@/components";
import { useGetSimilar } from "@/hooks";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  lisitingId: number;
} & SwiperProps;

const Similar: React.FC<Props> = ({ lisitingId, ...rest }) => {
  const { isLoading, data } = useGetSimilar(lisitingId);

  if (isLoading) {
    return (
      <div className="h-48 w-full flex items-center justify-center">
        loading...
      </div>
    );
  }
  return (
    <div className="p-2 my-5">
      <p className="text-2xl font-medium my-6"> Similar Listing</p>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        {...rest}
      >
        {data?.map((listing) => (
          <SwiperSlide key={listing.id}>
            <ListingCard listing={listing} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Similar;
