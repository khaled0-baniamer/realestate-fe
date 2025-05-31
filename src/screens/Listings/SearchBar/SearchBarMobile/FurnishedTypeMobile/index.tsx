import { Modal } from "@/components";
import { useDisclosure, useGetFurnishedTypes } from "@/hooks";
import {
  setFurnishedType,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { Lookup } from "@/types";
import { useState } from "react";

const FurnishedTypeMobile = () => {
  const [filter, setFilter] = useState("");
  const { isOpen, handleToggle } = useDisclosure();
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

  const filteredOptions = data?.filter((option) =>
    option.name.toLowerCase().includes(filter.toLowerCase())
  );

  const label =
    data
      ?.filter((option) => furnishedId.includes(option.id))
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
        {furnishedId.length ? displayLabel : "Furnished Type"}
      </button>
      <Modal isOpen={isOpen} onClose={handleToggle} title="Furnished Type">
        <div className=" border-gray-300 rounded-md  bg-white dark:bg-dark z-10 max-h-52 ">
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
              onClick={() => handleSelectedFurnished(option)}
            >
              <input
                type="checkbox"
                readOnly
                checked={furnishedId.includes(option.id)}
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

export default FurnishedTypeMobile;
