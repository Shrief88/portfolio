"use client";

import { motion } from "framer-motion";
import { TabsContent } from "@radix-ui/react-tabs";

type Props = {
  company: string;
  values: {
    title: string;
    companyUrl: string;
    startDate: string;
    endDate: string;
    description: string[];
  };
};

const TabContent = ({ company, values }: Props) => {

  return (
    <TabsContent key={company} value={company} className="w-full overflow-hidden">
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full px-6 md:px-0"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-primary-foreground text-lg md:text-xl font-bold">
            {values.title}{" "}
            <span className="text-foreground text-lg md:text-xl">
              <a
                href={values.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @ {company}
              </a>
            </span>
          </h2>
          <p className="font-fira text-muted-foreground text-sm">
            {values.startDate} - {values.endDate}
          </p>
        </div>

        <ul className="flex flex-col gap-3 mt-6">
          {values.description.map((d, i) => (
            <li
              key={i}
              className="relative pl-8 text-muted-foreground before:content-['▹'] before:mr-2 before:absolute before:left-0"
            >
              {d}
            </li>
          ))}
        </ul>
      </motion.div>
    </TabsContent>
  );
};

export default TabContent;