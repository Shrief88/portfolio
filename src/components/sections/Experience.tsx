import MaxWidthWrapper from "../MaxWidthWrapper";
import { TabsList, TabsTrigger, Tabs } from "../ui/tabs";
import type { Experience as ExperienceType } from "@/lib/sanity/types";
import TabContent from "../TabContent";
import AnimatedSectionWrapper from "../AnimatedSectionWrapper";

type Props = {
  experiences: ExperienceType[];
};

const Experience = ({ experiences }: Props) => {
  return (
    <MaxWidthWrapper>
      <AnimatedSectionWrapper id="experience">
        <h1 className="section-heading px-6 md:px-0" data-section-number="02.">
          Where I’ve Worked
        </h1>
        <div className="pt-10">
          <Tabs
            className="md:flex-row gap-10"
            defaultValue={experiences[0]?._id}
          >
            <TabsList className="md:flex-col items-start h-full bg-background gap-0 max-w-full overflow-scroll md:overflow-hidden justify-start">
              {experiences.map(({ _id, company }) => (
                <TabsTrigger
                  key={_id}
                  value={_id}
                  className="text-muted-foreground data-[state=active]:text-foreground rounded-none border-b-1 border-b-separator data-[state=active]:border-b-foreground md:border-b-0 md:border-l-1 md:border-l-separator md:data-[state=active]:border-l-foreground md:py-2 px-6 md:px-2 "
                >
                  {company}
                </TabsTrigger>
              ))}
            </TabsList>
            {experiences.map((experience) => (
              <TabContent experience={experience} key={experience._id} />
            ))}
          </Tabs>
        </div>
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Experience;
