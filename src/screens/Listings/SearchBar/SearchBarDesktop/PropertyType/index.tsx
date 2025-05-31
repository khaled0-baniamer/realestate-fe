"use client";
import { AutoComplete, DropDown } from "@/components";
import { useGetFurnishedTypes, useGetPropertyTypes } from "@/hooks";
import {
  setPropertyType,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { Lookup } from "@/types";

type Props = {
  customStyle?: string;
};

const PropertyType: React.FC<Props> = ({ customStyle }) => {
  const { data, isLoading } = useGetPropertyTypes();
  const { typeId } = useAppSelector((state) => state.heroSearch);
  const dispatch = useAppDispatch();

  const handleSelectedPropertyType = (value: Lookup) => {
    const id = value.id;
    if (typeId.includes(id)) {
      dispatch(setPropertyType(typeId.filter((item) => item !== id)));
    } else {
      dispatch(setPropertyType([...typeId, id]));
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
      onSelect={handleSelectedPropertyType}
      options={data}
      placeholder="Property Type"
      selectedValues={typeId}
      style={customStyle}
    />
  );
};

export default PropertyType;
