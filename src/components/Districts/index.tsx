"use client";
import { AutoComplete } from "@/components";
import { useGetDistricts } from "@/hooks";
import { setDistricts, useAppDispatch, useAppSelector } from "@/redux/slices";
import { Lookup } from "@/types";

type Props = { customStyle?: string };

const Districts: React.FC<Props> = ({ customStyle }) => {
  const { data, isLoading } = useGetDistricts();

  const dispatch = useAppDispatch();
  const { districtId } = useAppSelector((state) => state.heroSearch);
  const handleSelectedDistricts = (value: Lookup) => {
    const id = value.id;
    if (districtId.includes(id)) {
      dispatch(setDistricts(districtId.filter((item) => item !== id)));
    } else {
      dispatch(setDistricts([...districtId, id]));
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-white">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <AutoComplete
      onSelect={handleSelectedDistricts}
      options={data}
      placeholder="Districts"
      selectedValues={districtId}
      style={customStyle}
      showSearch={true}
    />
  );
};

export default Districts;
