import { setPurpose, useAppDispatch, useAppSelector } from "@/redux/slices";
import React from "react";


const Purpose: React.FC = () => {
  const dispatch = useAppDispatch();
  const { purpose } = useAppSelector((state) => state.heroSearch);
  return (
    <div className="rounded-tl-md border-b text-center border-t border-l bg-white dark:bg-dark p-1 ">
      <div className="flex items-center h-full space-x-2">
        <button
          onClick={() => dispatch(setPurpose("rent"))}
          className={`h-full rounded-md lg:py-0 py-2 border w-full ${
            purpose === "rent"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 text-black border-gray-300"
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => dispatch(setPurpose("buy"))}
          className={`h-full  rounded-md border w-full lg:py-0 py-2 ${
            purpose === "buy"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 text-black "
          }`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Purpose;
