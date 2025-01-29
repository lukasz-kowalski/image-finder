import { ChangeEvent } from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  id: string;
  name: string;
  value: string;
  label: string;
  error: string | undefined;
  options: Option[];
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: ChangeEvent) => void;
}

export const Select = ({
  id,
  name,
  value,
  label,
  error,
  options,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <select
        className="p-1 border-2 rounded-md"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">-- Please choose an option --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="h-[1rem]">
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    </div>
  );
};
