import { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props {
  type?: "button" | "submit";
  variant?: "confirm" | "danger";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type = "button",
  variant = "confirm",
  disabled,
  onClick,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const buttonClassNames = classNames({
    "text-white": true,
    "rounded-sm": true,
    "px-4": true,
    "py-1": true,
    "bg-sky-600": !disabled && variant === "confirm",
    "hover:bg-sky-700": !disabled && variant === "confirm",
    "bg-red-600": !disabled && variant === "danger",
    "hover:bg-red-700": !disabled && variant === "danger",
    "bg-gray-600": disabled,
    "hover:bg-gray-700": disabled,
  });

  return (
    <button
      className={buttonClassNames}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
