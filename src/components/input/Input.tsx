import { ChangeEvent } from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent) => void;
}

export const Input = ({
  id,
  name,
  value,
  label,
  onChange,
}: Props): JSX.Element => {
  return (
    <>
      <label htmlFor="name">{label}</label>
      <input
        className="p-1 border-2 rounded-md"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
