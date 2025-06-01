"use client";
import { Lookup } from "@/types";
import React, { useState, useRef, useEffect } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

type DropdownProps = {
  options?: Lookup[];
  onSelect: (value: Lookup) => void;
  placeholder?: string;
  style?: string;
  value?: Lookup ; 
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select an option",
  style,
  value = null, 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Lookup | null>(value); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: Lookup) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Update internal state when the value prop changes
  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <button
        type="button"
        className={`w-full text-left px-4 py-2 border-x-[0.5px] shadow-one border-b bg-white dark:bg-dark ${style}`}
        onClick={handleToggle}
      >
        <div className="flex justify-between items-center">
          {selected?.name || placeholder}
          <span>
            {isOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
          </span>
        </div>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white dark:bg-dark rounded-md shadow-one max-h-60 overflow-auto">
          {options?.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2  cursor-pointer"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
