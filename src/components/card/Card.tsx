import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="p-4 border shadow-sm shadow-gray-300 rounded-md">
      {children}
    </div>
  );
};
