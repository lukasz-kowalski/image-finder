import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "confirm" | "danger";
}

export const Button = (props: PropsWithChildren<Props>): JSX.Element => {
  const { variant = "confirm", children, ...buttonProps } = props;

  const buttonClassNames = classNames({
    "text-white": true,
    "rounded-sm": true,
    "px-4": true,
    "py-1": true,
    "bg-sky-600": !buttonProps.disabled && variant === "confirm",
    "hover:bg-sky-700": !buttonProps.disabled && variant === "confirm",
    "bg-red-600": !buttonProps.disabled && variant === "danger",
    "hover:bg-red-700": !buttonProps.disabled && variant === "danger",
    "bg-gray-600": buttonProps.disabled,
    "hover:bg-gray-700": buttonProps.disabled,
  });

  return (
    <button className={buttonClassNames} {...buttonProps}>
      {children}
    </button>
  );
};
