import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import EDUCATIONS from "@/config/educations";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
        My Education
      </h1>
      <div className="w-full h-fit flex flex-col">
        {EDUCATIONS.map((edu, index) => (
          <div className="w-full h-fit flex" key={index}>
            {edu.period}
            <div className="text-2xl font-rubik max-sm:text-xl">
              {edu.degree}, <br /> {edu.institution}
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default educationPage;
