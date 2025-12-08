import { FolderGit2, GraduationCap, HomeIcon, Mail, User } from "lucide-react";

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
    title: "About",
    icon: <User className="h-full w-full " />,
    href: "/about",
  },
  {
    title: "Experince",
    icon: <GraduationCap className="h-full w-full " />,
    href: "/experience",
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
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 z-10">
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
