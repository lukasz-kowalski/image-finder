import Link from "next/link";

import { Card } from "@/components/card/Card";

interface Props {
  errors: string[];
}

export const NoPhotoFound = ({ errors }: Props): JSX.Element => {
  return (
    <Card>
      {errors.map((error) => (
        <p key={error}>{error}</p>
      ))}

      <p className="mt-2">Please go back to form and try again</p>
      <div className="mt-2">
        <Link
          className="px-4 py-1 text-white bg-sky-600 hover:bg-sky-700 rounded-sm"
          href="/"
        >
          Back
        </Link>
      </div>
    </Card>
  );
};
