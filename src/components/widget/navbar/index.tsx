import {
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  User,
} from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/dock";

const data = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full " />,
    href: "/",
  },
  {
    title: "Experince",
    icon: <User className="h-full w-full " />,
    href: "/experience",
  },
  {
    title: "Skills",
    icon: <LightbulbIcon className="h-full w-full " />,
    href: "/skills",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-full w-full " />,
    href: "/education",
  },
  {
    title: "Projects",
    icon: <FolderGit2 className="h-full w-full " />,
    href: "/projects",
  },

  {
    title: "Contact us",
    icon: <Mail className="h-full w-full " />,
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            href={item.href}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
