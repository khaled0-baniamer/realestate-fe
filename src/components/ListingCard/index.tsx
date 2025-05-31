"use client";
import { Property } from "@/types";
import { priceFormat } from "@/utils";
import { ArrowsOut, Bathtub, Bed, MapPin } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  listing?: Property;
};

const ListingCard: React.FC<Props> = ({ listing }) => {
  const router = useRouter();
  const handleClick = () => {
    if (listing?.id) {
      router.push(`/listings/${listing.id}`);
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark cursor-pointer "
      >
        <div className="relative block aspect-[37/22] w-full">
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {listing?.type.name}
          </span>
          <Image
            loading="lazy"
            src={listing?.images?.[0] ?? "/images/blog/blog-01.jpg"}
            alt="image"
            fill
          />
        </div>
        <div className="p-2 sm:p-4 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="mb-4 block text-xl font-bold text-black  dark:text-white  sm:text-2xl max-h-16 min-h-16">
            {listing?.title}
          </h3>
          <div className="flex gap-2 my-4 text-sm">
            <MapPin size={16} />
            <p>{listing?.city.name}</p>
            <p>-</p>
            <p>{listing?.district.name}</p>
          </div>
          <p className="text-xl font-medium">
            {priceFormat(listing?.price)} JOD
          </p>
          <div className="flex justify-between min-h-20 max-h-20 items-center">
            <div className="flex items-center gap-1 lg:text-sm text-xs">
              <Bed className="w-4 h-4 lg:w-6 lg:h-6" />
              <p>{listing?.bedroom.name}</p>
            </div>
            <div className="flex items-center gap-1 lg:text-sm text-xs ">
              <Bathtub className="w-4 h-4 lg:w-6 lg:h-6" />
              <p>{listing?.bathroom.name}</p>
            </div>
            <div className="flex items-center gap-1 lg:text-sm text-xs">
              <ArrowsOut className="w-4 h-4 lg:w-6 lg:h-6" />
              <p>{listing?.area} m&sup2;</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={"/images/blog/author-02.png"} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  {listing?.user.name}
                </h4>
                {/* <p className="text-xs text-body-color">author.designation</p> */}
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {new Date(listing?.createdAt ?? "").toLocaleDateString()}
              </h4>
              <p className="text-xs text-body-color">publishDate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
