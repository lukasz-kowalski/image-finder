"use server";

import { httpErrorHandler } from "@/features/errors/httpErrorHandler";

export interface Img {
  description?: string;
  urls?: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  errors?: string[];
}

export const getImage = async (topicName: string): Promise<Img | null> => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_KEY}&query=${topicName}`
    );

    if (!response.ok) {
      httpErrorHandler({
        status: response.status,
      });

      return null;
    }

    const data = await response.json();

    return {
      description: data.alt_description,
      urls: data.urls,
      errors: data.errors,
    };
  } catch (error) {
    httpErrorHandler({
      status: 0,
    });

    return null;
  }
};
