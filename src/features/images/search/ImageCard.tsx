"use client";

import { useContext } from "react";

import { UserContext } from "@/features/user/context/UserContext";
import { Card } from "@/components/card/Card";
import { ImageWrapper } from "@/components/images/ImageWrapper";

export const ImageCard = (): JSX.Element => {
  const userState = useContext(UserContext);

  return (
    <Card>
      <div className="m-4">
        <ImageWrapper
          src={userState?.user?.selectedImg?.urls?.regular || ""}
          alt={userState?.user?.selectedImg?.description || ""}
          fill
          aria-live="polite"
        />
        <div className="mt-4">
          <p>Name: {userState?.user?.name}</p>
          <p>Surname: {userState?.user?.surname}</p>
        </div>
      </div>
    </Card>
  );
};
