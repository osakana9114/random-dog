"use server";

import { DOG_API_KEY } from "./env";

type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export async function fetchImage(): Promise<Image> {
  const res = await fetch("https://api.thedogapi.com/v1/images/search", {
    headers: { "x-api-key": DOG_API_KEY },
  });
  const images = await res.json();
  console.log("fetchImage: 画像情報を取得しました", images);
  return images[0];
}
