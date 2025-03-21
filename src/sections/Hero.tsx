import { hero } from "@/data.json";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Hero = () => {
  return (
    <MaxWidthWrapper className="min-h-screen">
      <section className="flex flex-col justify-center items-start gap-6 max-w-[1000px] w-full">
        <p className="font-fira text-foreground">Hi, my name is</p>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-foreground text-4xl md:text-[80px] font-bold">
            {hero.name}
          </h1>
          <h1 className="text-secondary-foreground text-[60px] font-bold hidden md:block">
            {hero.title}
          </h1>
        </div>
        <p className="text-muted-foreground max-w-[600px]">{hero.description}</p>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
// className="flex flex-col justify-center items-start max-w-[1000px] gap-6"
