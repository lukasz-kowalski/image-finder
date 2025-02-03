import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
}

export const Input = (props: Props): JSX.Element => {
  const { label, error, ...inputProps } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={inputProps.id}>{label}</label>
      <input
        {...inputProps}
        className="p-1 border-2 rounded-md"
        aria-invalid={!!error}
        aria-errormessage={`error-${inputProps.id}`}
      />
      <div className="h-[1rem]">
        <p id={`error-${inputProps.id}`} className="text-red-600 text-sm">
          {error}
        </p>
      </div>
    </div>
  );
};
