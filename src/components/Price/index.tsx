"use client"
import { useOutsideClick } from "@/hooks";
import {
  setpriceTo,
  setMinPrice,
  useAppDispatch,
  useAppSelector,
} from "@/redux/slices";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";

type Props = {customStyle?:string};

const PriceRange: React.FC<Props> = ({customStyle}) => {
  const dispatch = useAppDispatch();
  const { priceFrom, priceTo } = useAppSelector((state) => state.heroSearch);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

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

  const handleDone = () => {
    setIsDropdownOpen(false);
  };

  const handleReset = () => {
    dispatch(setMinPrice(""));
    dispatch(setpriceTo(""));
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <div
        className={customStyle}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <p>{displayLabel()}</p>
        {isDropdownOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
      </div>

      {isDropdownOpen && (
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

          <div className="mt-6 flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-primary text-white rounded shadow-md"
              onClick={handleDone}
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

export default PriceRange;
