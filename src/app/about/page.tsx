import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import PageTransition from "@/components/animations/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <About />
        <Skills />
        <Experience />
      </div>
    </PageTransition>
  );
}
