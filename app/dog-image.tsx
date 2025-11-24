"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";

type DogImageProps = {
  url: string;
};

// 画像を表示するコンポーネント
export function DogImage({ url }: DogImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div>
      <button onClick={refreshImage}>他のいぬも見る</button>
      {imageUrl && <img src={imageUrl} alt="Dog" />}
    </div>
  );
}
