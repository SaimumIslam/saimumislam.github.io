"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GraduationCap } from "lucide-react";

function EducationSection() {
  const [openEducationItem, setOpenEducationItem] = useState("");
  return (
    <section className="border-x full-line-bottom relative">
      <div className="px-4 py-2   ">
        <h3 className="text-primary font-medium ">Education</h3>
      </div>
      <div className=" full-line-bottom relative ">
        {educationData.map((institute, index) => (
          <div key={index} className="relative pl-10">
            {index !== educationData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}
            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <GraduationCap className="size-4" />
              </div>
            </div>
            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openEducationItem}
              className="border-b-0"
              onValueChange={setOpenEducationItem}
            >
              <AccordionItem value={`experience-${index}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4  gap-1 h-full">
                    <h3 className="text-balance font-mono  font-medium text-base leading-snug flex gap-2 items-center justify-center">
                      {institute.institution}
                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {institute.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    <p> {institute.description}</p>

                    <ul>
                      {institute.points.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
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

export default EducationSection;

const educationData = [
  {
    duration: "2023 - 2026",
    institution: "Doranda College",
    description:
      "Currently pursuing a Bachelor's degree in Computer Applications (BCA) at Doranda College.",
    points: [
      "Bachelor of Computer Applications (BCA)",
      "Learning programming, data structures, and web development",
      "Participating in tech events and workshops",
      "Preparing for a career in software and IT industry",
    ],
  },
  {
    duration: "2021 - 2022",
    institution: "Radha Govind College",
    description:
      "Studied Class 11 and 12 at Radha Govind College, an English medium institution under the Government board.",
    points: [
      "Classes attended: 11th and 12th",
      "Government board education system",
      "Specialized in science stream subjects",
      "Built strong academic foundation for higher studies",
    ],
  },
  {
    duration: "2017 - 2020",
    institution: "Sri Guru Nanak Public School",
    description:
      "Completed Class 8 to 10 at Sri Guru Nanak Public School, an English medium school affiliated with the CBSE board.",
    points: [
      "Classes attended: 8th to 10th",
      "CBSE board curriculum",
      "Focused on academic excellence and board preparation",
      "Enhanced communication and reasoning skills",
    ],
  },
  {
    duration: "20xx - 2016",
    institution: "St. Anns School",
    description:
      "Studied from Class 1 to 7 at St. Anns School, an English medium school affiliated with the ICSE board.",
    points: [
      "Classes attended: 1st to 7th",
      "English medium instruction",
      "ICSE board curriculum",
      "Foundation in core subjects like English, Math, and Science",
    ],
  },
];
