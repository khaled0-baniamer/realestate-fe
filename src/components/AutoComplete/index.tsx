"use client";;
import { useOutsideClick } from "@/hooks";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";

type Props = {
  options?: any[];
  onSelect: (value: any) => void;
  placeholder?: string;
  selectedValues: number[];
  style?: string;
  showSearch?: boolean;
};

const AutoComplete: React.FC<Props> = ({
  options,
  onSelect,
  placeholder,
  selectedValues,
  style,
  showSearch,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));
  const filteredOptions = options?.filter((option) =>
    option.name.toLowerCase().includes(filter.toLowerCase())
  );

  const label =
    options
      ?.filter((option) => selectedValues.includes(option.id))
      .map((opt) => opt.name) ?? [];

  const displayLabel =
    label.length > 1
      ? `${label?.slice(0, 1).join(", ")}...`
      : label?.join(", ");

  return (
    <div className={`relative z-50`} ref={dropdownRef}>
      <div
        className={` p-2  cursor-pointer  text-left px-4 py-2 border-x-[0.5px]  shadow-one border-b  bg-white dark:bg-dark flex justify-between items-center ${style}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p>{selectedValues.length > 0 ? displayLabel : placeholder}</p>

        <span>
          {isDropdownOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </span>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 border border-gray-300 rounded-md  bg-white dark:bg-dark z-10 max-h-52 overflow-y-auto">
          {showSearch && (
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 border-b border-gray-300 box-border"
            />
          )}
          {filteredOptions?.map((option) => (
            <div
              key={option.id}
              className={`flex items-center p-2 cursor-pointer ${
                selectedValues.includes(option.id) ? "bg-blue-50 dark:bg-blue-950" : ""
              }`}
              onClick={() => onSelect(option)}
            >
              <input
                type="checkbox"
                readOnly
                checked={selectedValues.includes(option.id)}
                className="mr-2"
              />
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
