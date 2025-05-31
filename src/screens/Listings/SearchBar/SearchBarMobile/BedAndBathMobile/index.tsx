import { Modal } from "@/components";
import { useDisclosure, useGetBathrooms, useGetBedrooms } from "@/hooks";
import {
  setBathrooms,
  setBedrooms,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const BedAndBathMobile = () => {
  const { isOpen, handleToggle } = useDisclosure();
  const { data: bathrooms, isLoading: batroomLoading } = useGetBathrooms();
  const { data: bedrooms, isLoading: bedroomsLoading } = useGetBedrooms();

  const dispatch = useAppDispatch();
  const { bathroomId, bedroomId } = useAppSelector((state) => state.heroSearch);

  const toggleSelection = (
    id: number,
    selected: number[],
    setSelected: ActionCreatorWithPayload<number[]>
  ) => {
    if (selected.includes(id)) {
      dispatch(setSelected(selected.filter((item) => item !== id)));
    } else {
      dispatch(setSelected([...selected, id]));
    }
  };

  const formatSelectedValues = (selected: number[], type: string) => {
    if (selected.length === 0) return "";
    if (selected.length <= 3) return selected.join(", ") + ` ${type}`;
    return `${selected.slice(0, 3).join(", ")}... ${type}`;
  };

  const displayLabel = () => {
    const bedroomsLabel = formatSelectedValues(bedroomId, "beds");
    const bathroomsLabel = formatSelectedValues(bathroomId, "baths");

    if (!bedroomsLabel && !bathroomsLabel) return "Bedroom & Bathroom";
    return `${bedroomsLabel}${
      bedroomsLabel && bathroomsLabel ? " & " : ""
    }${bathroomsLabel}`;
  };

  const handleReset = () => {
    dispatch(setBathrooms([]));
    dispatch(setBedrooms([]));
  };

  if (batroomLoading || bedroomsLoading) {
    return (
      <div className="flex items-center justify-center bg-white">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div>
      <button
        className="px-4 py-2 shadow-one border rounded-lg border-primary min-w-52 capitalize"
        onClick={handleToggle}
      >
        {displayLabel()}
      </button>
      <Modal
        isOpen={isOpen}
        onClose={handleToggle}
        title="Bedroom And Bathroom"
      >
        <div className=" bg-white dark:bg-dark  p-4 ">
          <div className="mb-6">
            <h3 className="font-medium mb-2">Bedrooms</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {bedrooms?.map((option) => (
                <button
                  key={option.id}
                  className={`px-2 py-1 border rounded transition-colors duration-300 
                              ${
                                bedroomId.includes(option.id)
                                  ? "bg-blue-500 text-white border-blue-500"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 border-gray-300"
                              }
                            `}
                  onClick={() =>
                    toggleSelection(option.id, bedroomId, setBedrooms)
                  }
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Bathrooms</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {bathrooms?.map((option) => (
                <button
                  key={option.id}
                  className={`px-2 py-1 border rounded transition-colors duration-300 
                              ${
                                bathroomId.includes(option.id)
                                  ? "bg-green-500 text-white border-green-500"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 border-gray-300"
                              }
                            `}
                  onClick={() =>
                    toggleSelection(option.id, bathroomId, setBathrooms)
                  }
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BedAndBathMobile;
