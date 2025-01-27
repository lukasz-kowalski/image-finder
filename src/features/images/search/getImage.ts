export interface Img {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export const getImage = async (topicName: string): Promise<Img | null> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}&per_page=1&query=${topicName}`
  );

  const data = await response.json();

  console.log(data);

  return data.results[0] ? data.results[0].urls : null;
};
