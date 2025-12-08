"use client";

import Project from "./_item";

import PROJECTS from "@/config/projects";

const Projects = () => {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="font-heading text-3xl font-semibold">My Experience</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Professional experience that I have accumulated over several years.
        </p>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2">
        {PROJECTS.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
