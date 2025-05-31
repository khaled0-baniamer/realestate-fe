"use client";
import React, { useRef, useState } from "react";
import { setPurpose, useAppDispatch, useAppSelector } from "@/redux/slices";
import { useOutsideClick } from "@/hooks";

const PurposeDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const { purpose } = useAppSelector((state) => state.heroSearch);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <p
        onClick={toggleDropdown}
        className="px-4 py-2 bg-white dark:bg-dark rounded-xl min-h-12 border border-primary flex items-center capitalize "
      >
        {purpose ? `${purpose}` : "Select Purpose"}
      </p>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-dark border border-gray-300 rounded-md shadow-lg z-50 p-5 flex gap-2">
          <button
            onClick={() => {
              dispatch(setPurpose("rent"));
              setIsOpen(false);
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
              setIsOpen(false);
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
      )}
    </div>
  );
};

export default PurposeDropdown;
