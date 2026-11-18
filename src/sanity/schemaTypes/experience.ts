import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "companyUrl", type: "url" }),
    defineField({ name: "startDate", type: "string", validation: (r) => r.required() }),
    defineField({ name: "endDate", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "text", rows: 2 }],
    }),
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
  preview: { select: { title: "company", subtitle: "title" } },
});
