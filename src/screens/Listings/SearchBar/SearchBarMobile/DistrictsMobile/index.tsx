import { Modal } from "@/components";
import { useDisclosure, useGetDistricts } from "@/hooks";
import { setDistricts, useAppDispatch, useAppSelector } from "@/redux/slices";
import { Lookup } from "@/types";
import { useState } from "react";

const DistrictsMobile = () => {
  const { data, isLoading } = useGetDistricts();
  const { isOpen, handleToggle } = useDisclosure();
  const [filter, setFilter] = useState("");
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

  const filteredOptions = data?.filter((option) =>
    option.name.toLowerCase().includes(filter.toLowerCase())
  );

  const label =
    data
      ?.filter((option) => districtId.includes(option.id))
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
        className="px-4 py-2 shadow-one border rounded-lg border-primary min-w-60"
        onClick={handleToggle}
      >
        {districtId.length ? displayLabel : "Districts"}
      </button>
      <Modal isOpen={isOpen} onClose={handleToggle} title="Districts">
        <div className=" border-gray-300 rounded-md  bg-white dark:bg-dark z-10 max-h-72 overflow-y-auto">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 border-b  border-gray-300  sticky top-0"
          />
          {filteredOptions?.map((option) => (
            <div
              key={option.id}
              className={`flex items-center p-2 cursor-pointer `}
              onClick={() => handleSelectedDistricts(option)}
            >
              <input
                type="checkbox"
                readOnly
                checked={districtId.includes(option.id)}
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

export default DistrictsMobile;
