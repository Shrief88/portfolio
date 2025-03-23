import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-5">
      <div className="md:hidden">
        <SocialMedia mode="horizontal" />
      </div>
      <div className="flex justify-center items-center text-xs pt-3">
        <p className="text-muted-foreground text-center font-fira">
          Inspired by {" "}
          <a
            href="https://v4.brittanychiang.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-animation"
          >
            Brittany Chiang Portfolio
          </a>
          , Implemented by{" "}
          <a
            href="https://github.com/Shrief88/portfolio"
            className="text-foreground underline-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sherif Essam
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
