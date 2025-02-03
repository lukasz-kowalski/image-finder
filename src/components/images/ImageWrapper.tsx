"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Loader } from "lucide-react";

interface Props extends ImageProps {
  wrapperHeight: string;
  wrapperWidth: string;
}

export const ImageWrapper = (props: Props): JSX.Element => {
  const { wrapperHeight, wrapperWidth, ...imageProps } = props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-[${wrapperWidth}] h-[${wrapperHeight}]`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <Loader className="w-8 h-8 text-gray-500 animate-spin" />
        </div>
      )}

      {imageProps.src && (
        <Image
          {...imageProps}
          className={`object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};
