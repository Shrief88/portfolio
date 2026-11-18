import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "review", type: "text", rows: 6, validation: (r) => r.required() }),
    defineField({ name: "link", type: "url" }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower numbers appear first.",
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    { title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "title" } },
});
