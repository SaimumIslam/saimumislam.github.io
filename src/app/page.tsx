import Image from "next/image";

import { HeroText, SocialLinks } from "@/components/section/home";
import { HackerBtn } from "@/components/animation/button";
import Marquee from "@/components/animation/marquee";

import ABOUT from "@/config/about";

export default function Home() {
  return (
    <section className="flex gap-2 justify-between">
      <aside className="flex flex-col gap-10">
        <HeroText />
        <HackerBtn label="Download Resume" />
        <SocialLinks />
        <p className="max-w-xl">{ABOUT.bio}</p>
        <Marquee items={ABOUT.skills} direction="right" speed="slow" />
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
