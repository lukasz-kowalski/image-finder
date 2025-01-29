"use client";

import { useContext } from "react";
import Image from "next/image";

import { UserContext } from "@/features/user/context/UserContext";
import { Card } from "@/components/card/Card";

export const ImageCard = (): JSX.Element => {
  const userState = useContext(UserContext);

  return (
    <Card>
      <div className="m-4">
        <div className="relative w-[8rem] h-[8rem]">
          {userState?.user?.selectedImg?.urls?.thumb && (
            <Image
              className="object-cover"
              src={userState?.user?.selectedImg?.urls.thumb}
              alt={userState?.user?.selectedImg?.description || ""}
              fill
            />
          )}
        </div>
        <div className="mt-4">
          <p>Name: {userState?.user?.name}</p>
          <p>Surname: {userState?.user?.surname}</p>
        </div>
      </div>
    </Card>
  );
};
