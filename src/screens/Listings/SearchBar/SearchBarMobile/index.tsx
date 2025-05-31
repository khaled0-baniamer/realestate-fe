import BedAndBathMobile from "./BedAndBathMobile";
import CityMobile from "./CityMobile";
import DistrictsMobile from "./DistrictsMobile";
import FurnishedTypeMobile from "./FurnishedTypeMobile";
import PriceMobile from "./PriceMobile";
import PropertyTypeMobile from "./PropertyTypeMobile";
import PurposeMobile from "./PurposeMobile";

type Props = {};

const SearchBarMobile: React.FC<Props> = ({}) => {
  return (
    <div className="lg:hidden flex w-full justify-between items-center my-5 gap-2 overflow-auto">
      <PurposeMobile />
      <CityMobile />
      <DistrictsMobile />
      <PropertyTypeMobile />
      <FurnishedTypeMobile />
      <BedAndBathMobile />
      <PriceMobile />
    </div>
  );
};

export default SearchBarMobile;
