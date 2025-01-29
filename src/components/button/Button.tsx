import { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props {
  type?: "button" | "submit";
  variant?: "confirm" | "danger";
  onClick?: () => void;
}

export const Button = ({
  type = "button",
  variant = "confirm",
  onClick,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const buttonClassNames = classNames({
    "text-white": true,
    "rounded-sm": true,
    "px-4": true,
    "py-1": true,
    "bg-sky-600": variant === "confirm",
    "hover:bg-sky-700": variant === "confirm",
    "bg-red-600": variant === "danger",
    "hover:bg-red-700": variant === "danger",
  });

  return (
    <button className={buttonClassNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
