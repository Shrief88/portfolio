import { hero } from "@/data.json";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <section className=" flex flex-col justify-center items-start max-w-[1000px] gap-6">
        <p className="font-fira text-foreground">Hi, my name is</p>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-foreground text-[80px] font-bold leading-[1.1]">
            {hero.name}
          </h1>
          <h1 className="text-secondary-foreground text-[60px] font-bold leading-[1.1]">
            {hero.title}
          </h1>
        </div>
        <p className="text-muted-foreground pr-100">{hero.description}</p>
      </section>
    </div>
  );
};

export default Hero;
