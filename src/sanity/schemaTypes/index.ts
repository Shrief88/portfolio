import type { SchemaTypeDefinition } from "sanity";

import { experience } from "./experience";
import { project } from "./project";
import { review } from "./review";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  experience,
  project,
  review,
];
