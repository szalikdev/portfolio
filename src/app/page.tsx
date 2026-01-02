import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Writeups } from "@/components/writeups";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Projects />
      <TechStack />
      <Writeups />
      <Contact />
    </main>
  );
}