"use client"
import { useGetBathrooms, useGetBedrooms, useOutsideClick } from "@/hooks";
import {
  setBathrooms,
  setBedrooms,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";

type Props = {
  customStyle?:string
};

const BedAndBath: React.FC<Props> = ({customStyle}) => {
  const { data: bathrooms, isLoading: batroomLoading } = useGetBathrooms();
  const { data: bedrooms, isLoading: bedroomsLoading } = useGetBedrooms();

  const dispatch = useAppDispatch();
  const { bathroomId, bedroomId } = useAppSelector(
    (state) => state.heroSearch
  );


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

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
    setIsDropdownOpen(false);
  };

  if (batroomLoading || bedroomsLoading) {
    return (
      <div className="flex items-center justify-center bg-white">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <div
        className={customStyle}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <p className="">{displayLabel()}</p>
        {isDropdownOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
      </div>

      {isDropdownOpen && (
        <div className="lg:absolute top-full  left-0 w-full bg-white dark:bg-dark rounded-lg shadow-lg p-6 z-[100]">
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
                    toggleSelection(
                      option.id,
                      bedroomId,
                      setBedrooms
                    )
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
                    toggleSelection(
                      option.id,
                      bathroomId,
                      setBathrooms
                    )
                  }
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-primary text-white rounded shadow-md"
              onClick={() => setIsDropdownOpen(false)}
            >
              Done
            </button>
            <button
              className="px-4 py-2 bg-yellow text-white rounded shadow-md"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BedAndBath;
