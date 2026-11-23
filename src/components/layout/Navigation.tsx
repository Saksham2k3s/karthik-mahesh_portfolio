import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/config/site";

type NavigationProps = {
  active: string;
  onNavigate: (id: string) => void;
};

const Navigation = ({ active, onNavigate }: NavigationProps) => {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header className="site-nav">
        <a
          href="#home"
          className="site-nav__brand"
          onClick={(event) => {
            event.preventDefault();
            go("home");
          }}
        >
          <span>{site.initials}</span>
          <strong>{site.name}</strong>
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={active === id ? "is-active" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  go(id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="site-nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="site-nav__drawer"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => {
              const id = item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={active === id ? "is-active" : ""}
                  onClick={(event) => {
                    event.preventDefault();
                    go(id);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
