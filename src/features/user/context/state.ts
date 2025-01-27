"use client";

import { useCallback, useState } from "react";

import { Img } from "@/features/images/search/getImage";

export interface User {
  name: string;
  surname: string;
  img: Img | null;
}

export interface UseUserStateOutput {
  user: User | null;
  setUserData: (user: User | null) => void;
  deleteUserData: () => void;
}

export const useUserState = (): UseUserStateOutput => {
  const [user, setUser] = useState<User | null>(null);

  const setUserData = useCallback((user: User | null): void => {
    setUser(user);
  }, []);

  const deleteUserData = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    setUserData,
    deleteUserData,
  };
};
