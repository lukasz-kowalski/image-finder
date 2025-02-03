"use client";

import { toast } from "react-toastify";

interface Props {
  status: number;
}

export const httpErrorHandler = ({ status }: Props) => {
  const errorCases: { [key: string]: any } = {
    404: () => toast.error("Requested resource not found"),
    500: () => toast.error("Internal Server Error"),
    default: () => toast.error("Something went wrong"),
  };

  const handleCustomError = errorCases[status] || errorCases.default;

  handleCustomError();
};
