"use client";

import { Badge } from "@/components/ui/badge";

import { Calendar } from "lucide-react";

import PROJECTS from "@/config/projects";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="font-heading text-3xl font-semibold">
          Personal Projects
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Experience I have gained through hands-on personal projects over
          several years.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {PROJECTS.map(
          ({ title, description, period, platform, technologies }) => (
            <div key={title} className="relative pl-5">
              <div className="bg-muted absolute left-0 top-2.5 h-full w-0.5 group-first:top-6 group-first:h-[calc(100%-24px)]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span>{period}</span>
                    <span>|</span>
                    <Badge variant="secondary" className="gap-1.5">
                      {platform}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full border px-3 py-1 text-xs"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
