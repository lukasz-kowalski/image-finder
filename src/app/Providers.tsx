"use client";

import { PropsWithChildren } from "react";

import { UserContext } from "@/features/user/context/UserContext";
import { useUserState } from "@/features/user/context/state";

export const Providers = ({ children }: PropsWithChildren) => {
  const userState = useUserState();

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};
