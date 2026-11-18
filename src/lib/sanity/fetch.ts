import "server-only";

import { cache } from "react";

import { client } from "./client";
import { homePageQuery } from "./queries";
import type { HomePage } from "./types";

export const getHomePage = cache(
  (): Promise<HomePage> =>
    client.fetch(homePageQuery, {}, { next: { tags: ["sanity"] } }) as Promise<HomePage>
);
