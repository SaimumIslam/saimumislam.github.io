import { SectionSeparator } from "@/components/ui/separator";
import LandingAnimation from "@/components/layout/landing";

import AboutSection from "./_sections/about";
import ProfileSection from "./_sections/profile";
import TechStackSection from "./_sections/tech-stack";
import ProjectsSection from "./_sections/project";
import ExperienceSection from "./_sections/experience";
import EducationSection from "./_sections/education";
import PublicationSection from "./_sections/publication";

import FooterSection from "./_sections/footer";
import BioSection from "./_sections/biography";
import SocialLinkSection from "./_sections/social-link";
import TopSection from "./_sections/top";
import ContactMeSection from "./_sections/contact";

export default function Home() {
  return (
    <LandingAnimation>
      <TopSection />

      <ProfileSection />
      <SectionSeparator className="full-line-bottom" />

      <BioSection />
      <SectionSeparator className="" />
      <SocialLinkSection />
      <SectionSeparator className="full-line-bottom" />
      <AboutSection />
      <SectionSeparator className="full-line-bottom" />
      <TechStackSection />
      <SectionSeparator className="full-line-bottom" />
      <ProjectsSection />
      <SectionSeparator className="full-line-bottom" />
      <ExperienceSection />
      <PublicationSection />
      <EducationSection />
      <SectionSeparator className="full-line-bottom" />
      <ContactMeSection />
      <SectionSeparator className="full-line-bottom" />
      <FooterSection />
      <SectionSeparator className="full-line-bottom" />
    </LandingAnimation>
  );
}
