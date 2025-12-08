"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

type TProps = {
  project: Project;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Project = ({ project, index }: TProps) => {
  const { title, description, technologies, link } = project;

  return (
    <div className="flex flex-col rounded border p-5">
      <Link
        href={link}
        aria-label={title}
        target="_blank"
        className="overflow-hidden rounded"
      ></Link>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
