import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data.json";

const About = () => {
  return (
    <MaxWidthWrapper>
      <section
        className="max-w-[1000px] flex flex-col justify-center pb-40"
        id="about"
      >
        <h1 className="section-heading" data-section-number="01.">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="md:col-span-3 flex flex-col gap-6 mt-10">
            <p className="text-muted-foreground">
              Hello! My name is Sherif and I enjoy creating things that live on
              the internet. My interest in web development started back when I
              was in Faculty when I decided to join a student activity that
              involved handling websites using HTML and CSS.
            </p>
            <p className="text-muted-foreground">
              My main focus is building{" "}
              <span className="font-bold text-foreground">
                scalable, high-performance
              </span>{" "}
              web applications and passionate about solving complex technical
              challenges and delivering{" "}
              <span className="font-bold text-foreground">
                high-quality, user-centric software
              </span>{" "}
              solutions.
            </p>
            <p className="text-muted-foreground">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default About;
