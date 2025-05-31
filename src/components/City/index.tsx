"use client";
import { DropDown } from "@/components";
import { useGetCities } from "@/hooks";
import { setCity, useAppDispatch, useAppSelector } from "@/redux/slices";
import { Lookup } from "@/types";

type Props = {
  customStyle?: string;
};

const City: React.FC<Props> = ({ customStyle }) => {
  const { data, isLoading } = useGetCities();
  const dispatch = useAppDispatch();
  const handleSelectedCity = (value: Lookup) => {
    dispatch(setCity(value.id));
  };
  const { cityId } = useAppSelector((state) => state.heroSearch);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-white dark:bg-dark">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <DropDown
      onSelect={handleSelectedCity}
      options={data}
      placeholder="City"
      style={customStyle}
      value={data?.find((ele) => ele.id == cityId)}
    />
  );
};

export default City;
