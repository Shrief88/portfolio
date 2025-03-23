import MaxWidthWrapper from "../MaxWidthWrapper";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "../ui/tabs";
import { experiences } from "@/content/data.json";

const Experience = () => {
  console.log(Object.entries(experiences));
  return (
    <MaxWidthWrapper>
      <section
        className="max-w-[1000px] flex flex-col justify-center py-24"
        id="experience"
      >
        <h1 className="section-heading px-6 md:px-0" data-section-number="02.">
          Where I’ve Worked
        </h1>
        <div className="pt-10">
          <Tabs
            className="md:flex-row gap-4"
            defaultValue={Object.keys(experiences)[0]}
          >
            <TabsList className="md:flex-col items-start h-full bg-background gap-0 md:gap-3 max-w-screen overflow-scroll md:overflow-hidden justify-start">
              {Object.keys(experiences).map((company) => (
                <TabsTrigger
                  key={company}
                  value={company}
                  className="rounded-none border-b-1 border-b-separator data-[state=active]:border-b-foreground md:border-b-0 md:border-l-1 md:border-l-separator md:data-[state=active]:border-l-foreground"
                >
                  {company}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(experiences).map(([company, values]) => (
              <TabsContent key={company} value={company}>
                <div className="flex flex-col gap-4 px-6 md:px-0">
                  <h2 className="text-primary-foreground text-2xl font-bold">
                    {values.title}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {values.description.map((d, i) => (
                      <li key={i} className="text-muted-foreground">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Experience;
