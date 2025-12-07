"use client";

import { motion } from "framer-motion";

import { Calendar, Briefcase } from "lucide-react";

import EXPERIENCES from "@/config/experiences";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <section id="experience" className="my-10 scroll-mt-28 md:mb-20">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold">My Experience</h2>
        <p className="text-muted-foreground mt-3 text-sm">
          Professional experience that I have accumulated over several years.
        </p>
      </div>

      <div className="relative ">
        {EXPERIENCES.map(
          ({ title, description, company, period, technologies }) => (
            <div key={company} className="not-last:pb-12 relative pl-8">
              <div className="bg-muted absolute left-0 top-2.5 h-full w-0.5 group-first:top-6 group-first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.175,
                }}
                viewport={{
                  once: true,
                }}
                className={cn("space-y-3 opacity-0")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <Briefcase className="size-5" />
                  </div>
                  <span className="text-lg font-semibold">{company}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Calendar className="size-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm "
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
