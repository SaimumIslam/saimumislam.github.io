"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowUpRight, CodeXml, Lightbulb } from "lucide-react";

import { DiscountIcon, CoinIcon } from "@/components/icons";

function ExperienceSection() {
  const [openItem, setOpenItem] = useState("experience-1");
  const [openFreelanceItem, setOpenFreelanceItem] = useState("");
  return (
    <section className=" border-x  full-line-bottom relative">
      <h2 className=" text-3xl pl-4 font-semibold relative full-line-bottom">
        Experience
      </h2>
      <div className=" full-line-bottom relative ">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-10">
            {index !== experienceData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}

            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <exp.icon className="size-4" />
              </div>
            </div>
            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openItem}
              className="border-b-0"
              onValueChange={setOpenItem}
            >
              <AccordionItem value={`experience-${exp.id}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 gap-1 h-full">
                    <h3 className="text-balance  font-medium text-base leading-snug flex gap-2 font-mono items-center justify-center">
                      {exp.company}
                      {exp.job ? (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                        </a>
                      ) : (
                        <span className="   size-2 border-2 border-white animate-ping bg-green-500  dark:border-gray-800 rounded-full"></span>
                      )}
                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {exp.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    {exp.job ? (
                      <p>
                        I am a <strong>{exp.title}</strong> at {exp.company},
                        {exp.description}
                      </p>
                    ) : (
                      <p> {exp.description}</p>
                    )}
                    <ul>
                      {exp.tasks.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.badge.map((badge, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-lg bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <div className="px-4 py-2   ">
        <h3 className="text-primary font-medium ">Freelancing</h3>
      </div>
      <div className=" full-line-bottom relative ">
        {freelanceData.map((freelancing, index) => (
          <div key={index} className="relative pl-10">
            {index !== freelanceData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}

            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <freelancing.icon className="size-4" />
              </div>
            </div>

            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openFreelanceItem}
              className="border-b-0"
              onValueChange={setOpenFreelanceItem}
            >
              <AccordionItem value={`experience-${freelancing.id}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 gap-1 h-full">
                    <h3 className="text-balance font-mono  font-medium text-base leading-snug flex gap-2 items-center justify-center">
                      {freelancing.project}

                      <a
                        href={freelancing.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                      </a>
                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {freelancing.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    <p> {freelancing.description}</p>

                    <ul>
                      {freelancing.tasks.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {freelancing.badge.map((badge, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-lg bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

const experienceData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Lightwork Ai",
    icon: CodeXml,
    job: true,
    location: "Remote",
    href: "https://www.lightwork.blue/",
    duration: "Full-Time  | Oct 2024 - Mar 2025",
    description: ` It is a Plaform where you can manage properties with ease. Powered by Smart AI, It Automate tasks, streamline communication, and keep tenants happy.`,
    tasks: [
      "Developed and maintained user interfaces for web applications using React and TypeScript.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Implemented responsive design principles to ensure optimal user experience across devices.",
      "Optimized application performance and resolved bugs.",
      "Created pages such as Settings, Docs, Profile and more.",
    ],
    badge: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn Ui",
      "React Query",
      "React Hook Form",
      "Zod",
      "React Redux",
      "Team Work",
      "Responsive Design",
      "Bug Solver",
      "Api integration",
      "Research",
    ],
  },
  {
    id: 2,
    title: "Looking For an Opportunity",
    company: "Looking For an Opportunity",
    job: false,
    icon: Lightbulb,
    location: "Bangalore, India",
    href: "",
    duration: "Full-Time | Current",
    description: `i am looking for an opportunity in full stack web development`,
    tasks: [
      "i have a Good experience in Frondent & Backend developerment.",
      "Have played so much with libraries such as tanstack-query, react-redux etc..",
      "i am Flexible for in both Part-time and Full-time.",
      "For More experience detail check out my projects.",
    ],
    badge: ["Thank you"],
  },
];

const freelanceData = [
  {
    id: 1,

    project: "KryptoKapital",
    icon: CoinIcon,

    location: "Remote",
    href: "https://pro.kryptokapital.info/",
    duration: "Part-Time  | Feb 2023 - Sep 2024",
    description: `KryptoKapital is a Platform that give you a practical advice and will guide you step by step to becoming a sovereign crypto investor, easy and directly implementable.
`,
    tasks: [
      "A platform with valious tool to study and analyise crypto status.",
      "one to one video call leacture and practical.",
      "All in one platform or beginners who are willing to invest in cryto.",
      "Re-created the whole patform with Nextjs 13 and Typescript.",
      "Integreated the Next auth authentication.",
      "Also connected with supbase and with realtime supabase/ssr.",
      "Used Framer motion and shadcnui for creating beautiful components.",
    ],
    badge: [
      "Full Stack App",
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn Ui",
      "React Query",
      "React Hook Form",
      "Zod",
      "React Redux",
      "Team Work",
      "Responsive Design",
      "Resend",
      "Research",
    ],
  },
  {
    id: 2,

    project: "Rupeespot",
    icon: DiscountIcon,

    location: "Remote",
    href: "http://rupeespot.com/",
    duration: "Part-Time  | Dec 2022 - Dec 2024",
    description: `Rupeespot is a platform for ecommerce costumers which has collection of Amazon, Flipkat and Ajio latest deals products. Where user can also Track lowest prices and check the price history of specific product.
`,
    tasks: [
      "User can Track any product price and get notification.",
      "User can see price history or any product and analyise it.",
      "Also have coupans and reedem codes.",
      "Created Product from scratch with Nextjs 14 and Typescript.",
      "Integreated the Next auth for authentication.",
      "Also connected with MySql datatabase via Drizzle ORM.",
      "Used Framer motion and shadcnui for creating beautiful components.",
    ],
    badge: [
      "Full Stack App",
      "Typescript",
      "React",
      "Next.js",
      "Apexcharts",
      "My Sql Database",
      "Drizzle ORM",
      "Tailwind CSS",
      "Shadcn Ui",
      "React Query",
      "React Hook Form",
      "Zod",
      "React Redux",
      "Team Work",
      "Responsive Design",
      "React Emails",
      "Research",
    ],
  },
];
