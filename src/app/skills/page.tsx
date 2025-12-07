import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";

import SkillItem from "./_item";

import SKILLS from "@/config/skills";

const skillPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl">
            My Technical Skills.
          </h1>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Currently i am a fresher and i have a solid understand of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using Javascript,
            Typescript, React, Nextjs & Node.
          </p>
        </div>
        <SkillItem
          title="Programming Languages"
          items={SKILLS.programmingLanguages}
        />
        <SkillItem title=" Framework/Libraries" items={SKILLS.frameworks} />
        <SkillItem title="Tools & Technologies" items={SKILLS.tools} />
      </div>
    </div>
  );
};

export default skillPage;
