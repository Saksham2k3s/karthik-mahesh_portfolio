import { useEffect, useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import { navItems } from "@/config/site";

const Index = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;

      if (progress > 0.98) {
        setActive("contact");
        return;
      }

      const anchor = window.innerHeight * 0.38;
      const match = navItems
        .map((item) => {
          const id = item.href.slice(1);
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            id,
            visible: rect.top < window.innerHeight && rect.bottom > 0,
            distance: Math.abs(rect.top - anchor),
          };
        })
        .filter((x): x is { id: string; visible: boolean; distance: number } => Boolean(x))
        .filter((x) => x.visible)
        .sort((a, b) => a.distance - b.distance)[0];

      if (match) setActive(match.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <div className="page__grain" aria-hidden="true" />
      <Navigation active={active} onNavigate={navigate} />

      <div className="content-shell">
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
