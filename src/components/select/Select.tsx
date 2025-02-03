import { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: string | undefined;
  options: Option[];
}

export const Select = (props: Props): JSX.Element => {
  const { label, error, options, ...selectProps } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={selectProps.id}>{label}</label>
      <select
        className="p-1 border-2 rounded-md"
        {...selectProps}
        aria-invalid={!!error}
        aria-errormessage={`error-${selectProps.id}`}
      >
        <option value="">-- Please choose an option --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="h-[1rem]">
        <p id={`error-${selectProps.id}`} className="text-red-600 text-sm">
          {error}
        </p>
      </div>
    </div>
  );
};
