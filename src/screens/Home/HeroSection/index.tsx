import HeroBg from "./HeroBg";
import Purpose from "./Purpose";
import { useAppSelector } from "@/redux/slices";
import { useRouter } from "next/navigation";
import { BedAndBath, City, Districts, Price } from "@/components";
import { convertObjectValuesToStrings } from "@/utils";

const HeroSection: React.FC = () => {
  const router = useRouter();
  const heroSearchSelector = useAppSelector((state) => state.heroSearch);
  const handleSearch = () => {
    const params = convertObjectValuesToStrings(heroSearchSelector);
    const searchParams = new URLSearchParams(params).toString();

    router.push(`/listings?${searchParams}`);
  };
  return (
    <>
      <section
        id="home"
        className="relative z-10 bg-slate-100 pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="m-auto bg-slate-300 max-w-[1050px] rounded-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <Purpose />
          <BedAndBath
            customStyle={
              "flex justify-between items-center border  w-full text-start px-4 py-2  cursor-pointer bg-white dark:bg-dark"
            }
          />
          <Price
            customStyle={
              "flex justify-between items-center lg:rounded-tr-md lg:border-t  lg:border-r border bg-white dark:bg-dark w-full text-start px-4 py-2 cursor-pointer"
            }
          />
          <City />
          <Districts />
          <button
            className="bg-primary text-white rounded-br-md lg:py-0 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <HeroBg />
      </section>
    </>
  );
};

export default HeroSection;
