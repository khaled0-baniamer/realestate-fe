import { useGetListingAmenities } from "@/hooks";
import Image from "next/image";

type Props = {
  id: number;
};

const Amenities: React.FC<Props> = ({ id }) => {
  const { isLoading, data } = useGetListingAmenities(id);
  if (isLoading) {
    return (
      <div className="h-48 w-full flex items-center justify-center">
        loading...
      </div>
    );
  }
  if (!data?.length)
    return (
      <div className="h-48 flex items-center justify-center">
        <p>There are no Amenities</p>
      </div>
    );

  return (
    <div className="flex flex-wrap gap-5">
      {data
        .filter((ele) => ele.amenity.icon)
        .map((amenity) => (
          <div className="flex items-center gap-2 min-w-48" key={amenity.id}>
            <Image
              src={amenity.amenity.icon}
              alt="test"
              width={"10"}
              height={"10"}
              className="h-5 w-5"
            />
            <p>{amenity.amenity.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Amenities;
