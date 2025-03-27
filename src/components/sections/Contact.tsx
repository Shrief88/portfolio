import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { links } from "@/content/data.json";

const Contact = () => {
  return (
    <MaxWidthWrapper>
      <AnimatedSectionWrapper id="contact">
        <div className="flex flex-col mt-10 justify-center items-center gap-4">
          <p className="font-fira text-foreground">4. What’s Next?</p>
          <h1 className="text-primary-foreground text-4xl md:text-[60px] font-bold">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-center max-w-[600px]">
            My inbox is always open! Whether you have a collaboration
            opportunity, a question, or just want to say hi, I will do my best
            to get back to you.
          </p>
          <Button
            variant={"outline"}
            className="cursor-pointer text-sm font-fira text-foreground mt-5"
            asChild
          >
            <a href={`mailto:${links.Email.href}`}>Say Hello</a>
          </Button>
        </div>
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Contact;
