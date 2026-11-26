import { useEffect, useRef, useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    function updateActiveSection() {
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      // The last section can be too short to reach the header.
      const atPageEnd =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      const currentSection = atPageEnd
        ? sections.at(-1)
        : sections.findLast((section) => section.getBoundingClientRect().top <= headerBottom + 2);

      setActiveSection(currentSection?.id ?? "home");
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Escape" && showNav) {
      setShowNav(false);
      menuButtonRef.current.focus();
    }
  }

  return (
    <header
      id="navbar"
      ref={headerRef}
      onKeyDown={handleKeyDown}
      className="sticky top-0 z-20 border-b border-[var(--primary-color)] bg-[var(--bg2-color)] shadow-[0_0_10px_var(--primary-color)]"
    >
      <div className="relative flex h-[44px] w-full items-center justify-between px-5">
        <a
          href="#home"
          onClick={() => setShowNav(false)}
          className={`rounded text-lg font-bold tracking-widest md:text-xl lg:text-2xl ${focusStyle}`}
        >
          <span className="bg-[url('./assets/text_background.jpg')] bg-contain bg-clip-text text-transparent">
            Anushanth R
          </span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={showNav ? "Close menu" : "Open menu"}
          aria-expanded={showNav}
          aria-controls="nav-links"
          onClick={() => setShowNav((isOpen) => !isOpen)}
          className={`grid size-11 cursor-pointer place-items-center rounded-lg text-[var(--primary-color)] hover:bg-white/10 md:hidden ${focusStyle}`}
        >
          <span aria-hidden="true" className="relative block size-5">
            <span className={`absolute inset-x-0 top-[9px] h-0.5 rounded-full bg-current ${showNav ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute inset-x-0 top-[9px] h-0.5 rounded-full bg-current ${showNav ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 top-[9px] h-0.5 rounded-full bg-current ${showNav ? "-rotate-45" : "translate-y-1.5"}`} />
          </span>
        </button>

        <nav
          id="nav-links"
          aria-label="Main navigation"
          className={`${showNav ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-[var(--primary-color)]/30 bg-[var(--bg2-color)] px-5 py-2 shadow-[0_6px_12px_#00ffff33] md:static md:block md:border-none md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:gap-4 lg:gap-7">
            {navLinks.map(({ id, label }) => {
              const isActive = id === activeSection;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setShowNav(false)}
                    className={`flex min-h-11 items-center rounded-[10px] px-[15px] text-base font-medium text-[var(--primary-color)] hover:rounded-[5px_12px] hover:bg-[var(--primary-color)] hover:text-black hover:shadow-[0_0_10px_#00ffff66] aria-[current=location]:not-hover:bg-[var(--primary-color)]/15 motion-safe:transition-[border-radius,background-color,color,box-shadow] md:min-h-8 lg:text-lg ${focusStyle}`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;