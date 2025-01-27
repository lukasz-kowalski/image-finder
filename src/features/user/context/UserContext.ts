"use client";

import { createContext } from "react";

import { UseUserStateOutput } from "./state";

export const UserContext = createContext<UseUserStateOutput | null>(null);
