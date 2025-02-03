"use client";

import { useCallback, useState } from "react";

import { Img } from "@/features/images/search/getImage";

export interface User {
  name?: string;
  surname?: string;
  topic?: string;
  selectedImg?: Img | null;
}

export interface UseUserStateOutput {
  user: User | null;
  setUserData: (user: User) => void;
}

export const useUserState = (): UseUserStateOutput => {
  const [user, setUser] = useState<User | null>(null);

  const setUserData = useCallback((userData: User): void => {
    setUser((prevState) =>
      prevState ? { ...prevState, ...userData } : userData
    );
  }, []);

  return {
    user,
    setUserData,
  };
};
