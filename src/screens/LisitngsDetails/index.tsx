"use client";
import { useGetListingDetails } from "@/hooks";
import Gallery from "./Gallery";
import AppointmentCard from "./AppointmentCard";
import Amenities from "./Amenities";
import Features from "./Features";
import { priceFormat } from "@/utils";
import Similar from "./Similar/inde";
import OwnerCard from "./OwnerCard";

type Props = {
  id: number;
};

const ListingDetailsScreen: React.FC<Props> = ({ id }) => {
  const { isLoading, data } = useGetListingDetails(id);
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        loading...
      </div>
    );
  }

  return (
    <div className=" w-full">
      <div className="grid grid-cols-8 gap-4 my-4">
        <Gallery images={data?.images as string[]} />
        <div className="shadow-one border rounded-md p-4 lg:col-span-2 col-span-8 lg:flex flex-col justify-between hidden">
          <AppointmentCard listingId={id} />
        </div>
      </div>
      <div>
        <p className="text-xl">{priceFormat(data?.price)} JOD / Year</p>
      </div>
      <div className="grid grid-cols-8 gap-4 py-2">
        <div className="lg:col-span-6 col-span-8">
          <div className=" text-3xl font-bold my-5 ">{data?.title}</div>
          <div className=" text-md my-5">{data?.description}</div>
          <Features data={data} />
        </div>
        <div className="lg:col-span-2 col-span-8 lg:block hidden">
          <OwnerCard ownerData={data?.user} />
        </div>
      </div>

      <div className="my-5 grid grid-cols-8 gap-4 py-2">
        <div className="col-span-6">
          <p className="text-2xl font-medium my-6">Amenities</p>
          <Amenities id={id} />
        </div>
      </div>

      <div className="my-5 lg:hidden block shadow-one border rounded-md p-4">
        <AppointmentCard listingId={id} />
      </div>

      <div className="my-5 lg:hidden ">
        <OwnerCard ownerData={data?.user} />
      </div>

      <div className="lg:block hidden">
        <Similar
          lisitingId={id}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
        />
      </div>
      <div className="lg:hidden block">
        <Similar
          lisitingId={id}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
        />
      </div>
    </div>
  );
};

export default ListingDetailsScreen;
