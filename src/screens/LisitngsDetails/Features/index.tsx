import { Property } from "@/types";

type Props = {
  data?: Property;
};

const Features: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-5 ">
      <p className="text-2xl font-medium my-6">Details</p>
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center min-w-56">
          <p className="font-medium">Furnish Type : </p>
          <p>{data?.furnished.name}</p>
        </div>

        <div className="flex items-center min-w-56">
          <p className="font-medium">Country : </p>
          <p>{data?.country.name}</p>
        </div>

        <div className="flex items-center min-w-56">
          <p className="font-medium">City : </p>
          <p>{data?.city.name}</p>
        </div>
        <div className="flex items-center min-w-56">
          <p className="font-medium">District : </p>
          <p>{data?.district.name}</p>
        </div>
        <div className="flex items-center min-w-56">
          <p className="font-medium">Property Type : </p>
          <p>{data?.type.name}</p>
        </div>
        <div className="flex items-center min-w-56 ">
          <p className="font-medium">Bedrooms : </p>
          <p>{data?.bedroom.name}</p>
        </div>
        <div className="flex items-center min-w-56">
          <p className="font-medium">Bathrooms : </p>
          <p>{data?.bathroom.name}</p>
        </div>

        <div className="flex items-center min-w-56">
          <p className="font-medium">Bathrooms : </p>
          <p>{data?.area} m&sup2;</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
