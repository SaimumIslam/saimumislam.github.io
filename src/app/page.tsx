import Image from "next/image";

import { HeroText, SocialLinks } from "@/components/section/home";
import { HackerBtn } from "@/components/animation/button";

import ABOUT from "@/config/about";

export default function Home() {
  return (
    <section className="flex gap-2 justify-between" id="home">
      <aside className="flex flex-col gap-10">
        <HeroText />
        <HackerBtn label="Download Resume" />
        <SocialLinks />
        <p className="max-w-xl">{ABOUT.bio}</p>
      </aside>
      <aside className="flex flex-col gap-10">
        <Image
          className="rounded-xs"
          src="/profile.jpg"
          alt="profile"
          loading="eager"
          width={400}
          height={400}
          priority
        />
      </aside>
    </section>
  );
}
