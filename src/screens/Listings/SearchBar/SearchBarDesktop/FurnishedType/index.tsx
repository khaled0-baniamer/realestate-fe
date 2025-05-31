"use client";
import { AutoComplete, DropDown } from "@/components";
import { useGetFurnishedTypes } from "@/hooks";
import {
  setFurnishedType,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { Lookup } from "@/types";

type Props = {
  customStyle?: string;
};

const FurnishedType: React.FC<Props> = ({ customStyle }) => {
  const { data, isLoading } = useGetFurnishedTypes();
  const { furnishedId } = useAppSelector((state) => state.heroSearch);
  const dispatch = useAppDispatch();

  const handleSelectedFurnished = (value: Lookup) => {
    const id = value.id;
    if (furnishedId.includes(id)) {
      dispatch(setFurnishedType(furnishedId.filter((item) => item !== id)));
    } else {
      dispatch(setFurnishedType([...furnishedId, id]));
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
      onSelect={handleSelectedFurnished}
      options={data}
      placeholder="Furnished Type"
      selectedValues={furnishedId}
      style={customStyle}
    />
  );
};

export default FurnishedType;
