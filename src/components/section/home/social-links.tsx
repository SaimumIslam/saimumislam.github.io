import { cn } from "@/lib/utils";
import {
  Facebook,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import ABOUT from "@/config/about";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: ABOUT.socialLinks.facebook,
      icon: <Facebook />,
    },
    {
      name: "Twitter",
      link: ABOUT.socialLinks.twitter,
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      link: ABOUT.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: ABOUT.socialLinks.github,
      icon: <Github />,
    },
    {
      name: "Medium",
      link: ABOUT.socialLinks.medium,
      icon: <ExternalLink />,
    },
  ];
  return (
    <div className="flex gap-4">
      {links.map((itm, indx) => {
        return (
          <Link
            key={indx}
            target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            {itm.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
