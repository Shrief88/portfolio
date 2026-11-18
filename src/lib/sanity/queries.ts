import { defineQuery } from "next-sanity";

export const homePageQuery = defineQuery(`{
  "settings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    hero,
    skills,
    links
  },
  "experiences": *[_type == "experience"] | order(order asc){
    _id,
    company,
    title,
    companyUrl,
    startDate,
    endDate,
    description
  },
  "projects": *[_type == "project"] | order(order asc){
    _id,
    title,
    description,
    skills,
    liveUrl,
    image{
      alt,
      hotspot,
      crop,
      asset->{
        _id,
        url,
        metadata{ lqip }
      }
    }
  },
  "reviews": *[_type == "review"] | order(order asc){
    _id,
    name,
    title,
    review,
    link
  }
}`);
