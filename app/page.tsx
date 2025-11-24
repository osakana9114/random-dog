import { connection } from "next/server";
import { DogImage } from "./dog-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  await connection();

  // APIから画像を取得
  const image = await fetchImage();
  return <DogImage url={image.url} />;
}
