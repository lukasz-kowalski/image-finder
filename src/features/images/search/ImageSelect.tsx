"use client";

import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { UserContext } from "@/features/user/context/UserContext";
import { Button } from "@/components/button/Button";
import { Card } from "@/components/card/Card";

import { getImage } from "./getImage";
import { NoPhotoFound } from "./NoPhotoFound";

export const ImageSelect = (): JSX.Element => {
  const userState = useContext(UserContext);

  const getAndSaveImage = async () => {
    const topic = userState?.user?.topic;

    if (topic) {
      const image = await getImage(topic);

      userState.setUserData({ selectedImg: image });
    }
  };

  const handleRejectClick = async () => {
    userState?.setUserData({ selectedImg: null });

    await getAndSaveImage();
  };

  useEffect(() => {
    if (!userState?.user?.selectedImg) {
      getAndSaveImage();
    }
  }, []);

  return userState?.user?.selectedImg?.errors ? (
    <NoPhotoFound errors={userState?.user?.selectedImg?.errors} />
  ) : (
    <Card>
      <div className="relative w-[24rem] h-[24rem]">
        {userState?.user?.selectedImg?.urls?.regular && (
          <Image
            className="object-cover"
            src={userState?.user?.selectedImg?.urls.regular}
            alt={userState?.user?.selectedImg?.description || ""}
            fill
          />
        )}
      </div>
      <h3 className="mt-2 text-lg">Do you accept the image?</h3>

      <div className="mt-2 flex gap-4">
        <Button variant="danger" onClick={handleRejectClick}>
          Reject
        </Button>
        <Link
          className="px-4 py-1 text-white bg-sky-600 hover:bg-sky-700 rounded-sm"
          href="/summary"
        >
          Accept
        </Link>
      </div>
    </Card>
  );
};
