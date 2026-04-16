import "server-only";

import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import { getPlaiceholder } from "plaiceholder";

export const getImagePlaceholder = cache(async (src: string) => {
  const imagePath = src.startsWith("/") ? src.slice(1) : src;
  const buffer = await readFile(path.join(process.cwd(), "public", imagePath));

  return getPlaiceholder(buffer);
});
