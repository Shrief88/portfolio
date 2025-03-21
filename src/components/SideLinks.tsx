import SocialMedia from "@/components/SocialMedia";

const SideLinks = () => {
  return (
    <div className="fixed w-10 left-10 bottom-0 hidden md:block">
      <SocialMedia mode="vertical" />
    </div>
  );
};

export default SideLinks;
