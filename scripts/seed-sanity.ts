// One-off migration: npx tsx --env-file=.env.local scripts/seed-sanity.ts
import { createReadStream } from "fs";
import path from "path";
import { createClient } from "@sanity/client";

import data from "../src/content/data.json";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET and SANITY_API_WRITE_TOKEN in .env.local"
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const main = async () => {
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    hero: data.hero,
    skills: data.skills,
    links: {
      linkedin: data.links.Linkedin.href,
      github: data.links.Github.href,
      email: data.links.Email.href,
    },
  });
  console.log("siteSettings");

  for (const [i, [company, e]] of Object.entries(data.experiences).entries()) {
    await client.createOrReplace({
      _id: `experience-${slug(company)}`,
      _type: "experience",
      company,
      title: e.title,
      ...(e.companyUrl ? { companyUrl: e.companyUrl } : {}),
      startDate: e.startDate,
      endDate: e.endDate,
      description: e.description,
      order: i,
    });
    console.log("experience", company);
  }

  for (const [i, [name, p]] of Object.entries(data.mainProjects).entries()) {
    const file = path.join(process.cwd(), "public", p.links.image);
    const asset = await client.assets.upload("image", createReadStream(file), {
      filename: path.basename(file),
    });
    await client.createOrReplace({
      _id: `project-${slug(name)}`,
      _type: "project",
      title: p.title,
      description: p.description,
      skills: p.skills,
      ...("Live" in p.links ? { liveUrl: p.links.Live } : {}),
      image: {
        _type: "image",
        alt: p.title,
        asset: { _type: "reference", _ref: asset._id },
      },
      order: i,
    });
    console.log("project", name);
  }

  for (const [i, r] of data.reviews.entries()) {
    await client.createOrReplace({
      _id: `review-${slug(r.name)}`,
      _type: "review",
      name: r.name,
      title: r.title,
      review: r.review,
      ...(r.link ? { link: r.link } : {}),
      order: i,
    });
    console.log("review", r.name);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
