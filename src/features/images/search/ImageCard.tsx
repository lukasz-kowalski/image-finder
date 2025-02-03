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
          wrapperHeight="8rem"
          wrapperWidth="8rem"
          src={userState?.user?.selectedImg?.urls?.thumb || ""}
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
