import { SectionTitle } from "@/components";
import { useGetDistricts } from "@/hooks";
import { setCity, setDistricts, useAppSelector } from "@/redux/slices";
import { District } from "@/types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


const TrendingArea: React.FC = () => {
  const { data, isLoading } = useGetDistricts();
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 my-5">
      <div className="container">
        <SectionTitle
          title="Trending Area"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            loading..
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 xl:grid-cols-5">
            {data?.slice(0, 10).map((district) => (
              <div key={district.id} className="w-full">
                <TrendingAreaCard district={district} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingArea;

function TrendingAreaCard({ district }: { district: District }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { purpose } = useAppSelector((state) => state.heroSearch);
  const { name, cityId, id } = district;
  const handleClick = () => {
    const url = `/listings/?puropse=${purpose}&cities=${cityId}&districts=${id}`;
    dispatch(setCity(cityId));
    dispatch(setDistricts([id]));
    router.push(url);
    console.log("🚀 ~ handleClick ~ url:", url);
  };
  return (
    <div
      onClick={handleClick}
      className="relative w-full max-h-36 h-full min-h-32 rounded-lg overflow-hidden  bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark cursor-pointer"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <p className="text-white lg:text-xl text-md font-semibold">{name}</p>
      </div>
    </div>
  );
}
