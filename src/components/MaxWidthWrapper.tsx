import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-6 md:px-20 flex justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
