import { Modal } from "@/components";
import { useDisclosure } from "@/hooks";
import { setPurpose, useAppDispatch, useAppSelector } from "@/redux/slices";
const PurposeMobile = () => {
  const dispatch = useAppDispatch();
  const { purpose } = useAppSelector((state) => state.heroSearch);
  const { isOpen, handleToggle } = useDisclosure();

  return (
    <div>
      <button
        className="px-4 py-2 shadow-one border rounded-lg border-primary min-w-28 capitalize"
        onClick={handleToggle}
      >
        {purpose ? purpose : "Purpose"}
      </button>
      <Modal isOpen={isOpen} onClose={handleToggle} title="Purpos">
        <div className=" border-t  p-5 flex gap-2">
          <button
            onClick={() => {
              dispatch(setPurpose("rent"));
            }}
            className={`block w-full px-4 py-2 text-left rounded-lg ${
              purpose === "rent"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-black "
            }`}
          >
            Rent
          </button>
          <button
            onClick={() => {
              dispatch(setPurpose("buy"));
            }}
            className={`block w-full px-4 py-2 text-left rounded-lg ${
              purpose === "buy"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-black "
            }`}
          >
            Buy
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PurposeMobile;
