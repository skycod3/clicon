import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export default function Input({ name, label, className, ...rest }: InputProps) {
  return (
    <>
      {label && (
        <label className="sr-only" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        className={`pl-5 pr-12 py-[0.875rem] rounded-[2px] text-gray-500 text-sm w-full ${className}`}
        id={name}
        {...rest}
      />
    </>
  );
}
