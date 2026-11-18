import Studio from "@/sanity/Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
