import { Modal } from "@/components";
import { useDisclosure, useGetPropertyTypes } from "@/hooks";
import {
  setPropertyType,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { Lookup } from "@/types";
import { useState } from "react";

const PropertyTypeMobile = () => {
  const [filter, setFilter] = useState("");
  const { isOpen, handleToggle } = useDisclosure();
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

  const filteredOptions = data?.filter((option) =>
    option.name.toLowerCase().includes(filter.toLowerCase())
  );

  const label =
    data
      ?.filter((option) => typeId.includes(option.id))
      .map((opt) => opt.name) ?? [];

  const displayLabel =
    label.length > 1
      ? `${label?.slice(0, 1).join(", ")}...`
      : label?.join(", ");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-white">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div>
      <button
        className="px-4 py-2 shadow-one border rounded-lg border-primary min-w-44 capitalize"
        onClick={handleToggle}
      >
        {typeId.length ? displayLabel : "Property Type"}
      </button>
      <Modal onClose={handleToggle} isOpen={isOpen} title="Property Type">
        <div className=" border-gray-300 rounded-md  bg-white dark:bg-dark z-10 max-h-72">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 border-b border-gray-300 box-border"
          />
          {filteredOptions?.map((option) => (
            <div
              key={option.id}
              className={`flex items-center p-2 cursor-pointer`}
              onClick={() => handleSelectedPropertyType(option)}
            >
              <input
                type="checkbox"
                readOnly
                checked={typeId.includes(option.id)}
                className="mr-2"
              />
              {option.name}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PropertyTypeMobile;
