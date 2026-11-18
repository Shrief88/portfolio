export type Hero = {
  name: string;
  title: string;
  description: string;
};

export type SiteLinks = {
  linkedin?: string;
  github?: string;
  email?: string;
};

export type SiteSettings = {
  hero: Hero;
  skills: string[];
  links: SiteLinks;
};

export type Experience = {
  _id: string;
  company: string;
  title: string;
  companyUrl?: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type ProjectImage = {
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  asset: {
    _id: string;
    url: string;
    metadata: {
      lqip: string;
    };
  };
};

export type Project = {
  _id: string;
  title: string;
  description: string;
  skills: string[];
  liveUrl?: string;
  image: ProjectImage;
};

export type Review = {
  _id: string;
  name: string;
  title: string;
  review: string;
  link?: string;
};

export type HomePage = {
  settings: SiteSettings;
  experiences: Experience[];
  projects: Project[];
  reviews: Review[];
};
