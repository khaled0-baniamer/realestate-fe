"use client";
import { Property } from "@/types";
import { ArrowsOut, Bathtub, Bed, MapPin } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import ImageSlider from "../ImageSlider";
import { priceFormat } from "@/utils";

type Props = {
  data: Property;
};

const Card: React.FC<Props> = ({ data }) => {
  const {
    id,
    title,
    description,
    price,
    bedroom,
    bathroom,
    area,
    city,
    district,
    images,
    type,
    purpose,
  } = data;
  const router = useRouter();

  const handleClick = () => router.push(`/listings/${id}`);
  return (
    <div className="min-h-64 flex flex-col lg:flex-row md:space-x-5 rounded-xl shadow-lg p-3 mx-auto border  bg-white dark:bg-dark">
      <div className="relative  lg:max-w-sm  w-full bg-white dark:bg-dark ">
        <span className="absolute right-3 w-24 top-4 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {type?.name}
        </span>
        <ImageSlider images={images as string[]} />
      </div>
      <div
        className="w-full  lg:w-2/3 bg-white dark:bg-dark flex flex-col space-y-2 p-3 cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="font-bold md:text-2xl text-xl">{title}</h3>
        <div  className="flex gap-4">
          <div className="flex items-center gap-1 text-sm">

          <MapPin size={16} />
          <p>{city.name}</p>
          <p>,</p>
          <p>{district.name}</p>
          </div>
          <div className="text-gray-300">|</div>
          <div>
            <p className="capitalize font-medium">{purpose}</p>
          </div>
        </div>
        <div className="flex justify-between min-h-20 max-h-20 items-center ">
          <div className="flex items-center gap-1 lg:text-sm text-xs">
            <Bed className="w-4 h-4 lg:w-6 lg:h-6" />
            <p>{bedroom.name}</p>
          </div>
          <div className="flex items-center gap-1 lg:text-sm text-xs">
            <Bathtub className="w-4 h-4 lg:w-6 lg:h-6" />
            <p>{bathroom.name}</p>
          </div>
          <div className="flex items-center gap-1 lg:text-sm text-xs">
            <ArrowsOut className="w-4 h-4 lg:w-6 lg:h-6" />
            <p>{area} m&sup2;</p>
          </div>
        </div>

        <div className="flex items-center gap-1 min-h-16 max-h-16 ">
          <p className="text-2xl font-bold ">{priceFormat(price)} JOD</p>
          <p>/</p>
          <p className="font-normal  text-base">Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
