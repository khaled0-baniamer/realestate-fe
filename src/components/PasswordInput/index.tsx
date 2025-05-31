"use client"
import React, { useState, forwardRef } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react";

interface PasswordInputProps {
  id: string;
  name: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      id,
      name,
      required = false,
      autoComplete = "current-password",
      placeholder = "Enter your password",
      value,
      onChange,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          ref={ref}
          value={value}
          onChange={onChange}
          className="block w-full rounded-md text-dark dark:text-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeClosed size={24} /> : <Eye size={24} />}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput"; 

export default PasswordInput;
