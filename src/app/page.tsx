import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { ZalixProject } from "@/components/project";
import { TechStack } from "@/components/tech-stack";
import { Writeups } from "@/components/writeups";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <ZalixProject />
      <TechStack />
      <Writeups />
      <Contact />
    </main>
  );
}