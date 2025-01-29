import { ChangeEvent } from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  label: string;
  error: string | undefined;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: ChangeEvent) => void;
}

export const Input = ({
  id,
  name,
  value,
  label,
  error,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        className="p-1 border-2 rounded-md"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="h-[1rem]">
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    </div>
  );
};
