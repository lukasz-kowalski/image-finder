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
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}&query=${topicName}`
  );

  const data = await response.json();

  console.log(data);

  return {
    description: data.alt_description,
    urls: data.urls,
    errors: data.errors,
  };
};
