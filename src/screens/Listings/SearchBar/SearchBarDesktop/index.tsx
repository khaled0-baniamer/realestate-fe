import { BedAndBath, City, Districts, Price } from "@/components";
import PurposeDropdown from "./Purpose";
import PropertyType from "./PropertyType";
import FurnishedType from "./FurnishedType";


const SearchBarDesktop: React.FC = ({}) => {

  return (
    <div className="w-full justify-between items-center my-5 gap-2 z-50 lg:flex hidden">
      <PurposeDropdown />
      <City
        customStyle={"py-3 w-full rounded-xl border-t border-primary min-w-28"}
      />
      <Districts
        customStyle={"py-3 min-w-72 rounded-xl border border-primary"}
      />
      <PropertyType
        customStyle={"min-w-44 py-3 border rounded-lg border-primary"}
      />
      <FurnishedType
        customStyle={"min-w-48 py-3 border rounded-lg border-primary"}
      />
      <BedAndBath
        customStyle={
          "flex justify-between items-center min-w-64 rounded-xl border-primary border  w-full text-start px-4 py-3 cursor-pointer bg-white dark:bg-dark"
        }
      />
      <Price
        customStyle={
          "flex min-w-60  justify-between items-center  bg-white dark:bg-dark w-full text-start px-4 py-3 cursor-pointer border border-primary rounded-xl"
        }
      />
    </div>
  );
};

export default SearchBarDesktop;
