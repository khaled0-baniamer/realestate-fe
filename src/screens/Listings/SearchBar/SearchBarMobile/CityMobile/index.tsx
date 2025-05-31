import { Modal } from "@/components";
import { useDisclosure, useGetCities } from "@/hooks";
import { setCity, useAppDispatch, useAppSelector } from "@/redux/slices";
import { City } from "@/types";
import { useState } from "react";

const CityMobile = () => {
  const { cityId } = useAppSelector((state) => state.heroSearch);
  const { data, isLoading } = useGetCities();
  const { isOpen, handleToggle } = useDisclosure();
  const [selected, setSelected] = useState<City | null>(
    data?.find((ele) => ele.id == cityId) ?? null
  );
  const dispatch = useAppDispatch();
  const handleSelectedCity = (value: City) => {
    dispatch(setCity(value.id));
    setSelected(value);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-white dark:bg-dark">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div>
      <button
        className="px-4 py-2 shadow-one border rounded-lg border-primary min-w-28 "
        onClick={handleToggle}
      >
        {selected ? selected.name : "City"}
      </button>
      <Modal isOpen={isOpen} onClose={handleToggle} title="Cities">
        <ul className="z-10 w-full mt-2 bg-white dark:bg-dark rounded-md  max-h-72 overflow-auto">
          {data?.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectedCity(option)}
              className={`px-4 py-2 bg-white dark:bg-dark hover:bg-gray-100 cursor-pointer ${
                option.id == selected?.id ? "border border-primary rounded-lg" : ""
              }`}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
export default CityMobile;
