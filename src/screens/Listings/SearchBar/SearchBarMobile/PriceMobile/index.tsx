import { Modal } from "@/components";
import { useDisclosure } from "@/hooks";
import {
  setMinPrice,
  setpriceTo,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const PriceMobile = () => {
  const { isOpen, handleToggle } = useDisclosure();
  const dispatch = useAppDispatch();
  const { priceFrom, priceTo } = useAppSelector((state) => state.heroSearch);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setPrice: ActionCreatorWithPayload<string>
  ) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      dispatch(setPrice(value));
    }
  };

  const displayLabel = () => {
    if (priceFrom && priceTo) {
      return `${priceFrom} - ${priceTo}`;
    } else if (priceFrom) {
      return `${priceFrom} - any`;
    } else if (priceTo) {
      return `any - ${priceTo}`;
    } else {
      return "Price Range";
    }
  };

  return (
    <div>
      <button
        className="px-4 py-2 shadow-one border rounded-lg border-primary min-w-44 capitalize"
        onClick={handleToggle}
      >
        {displayLabel()}
      </button>
      <Modal isOpen={isOpen} onClose={handleToggle} title="Price">
        <div className="lg:absolute relative top-full left-0 w-full bg-white dark:bg-dark rounded-lg shadow-lg p-6 z-10">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="priceFrom" className="block font-medium mb-1">
                Minimum Price
              </label>
              <input
                id="priceFrom"
                type="text"
                value={priceFrom}
                onChange={(e) => handleInputChange(e, setMinPrice)}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter minimum price"
              />
            </div>

            <div>
              <label htmlFor="priceTo" className="block font-medium mb-1">
                Maximum Price
              </label>
              <input
                id="priceTo"
                type="text"
                value={priceTo}
                onChange={(e) => handleInputChange(e, setpriceTo)}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter maximum price"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PriceMobile;
