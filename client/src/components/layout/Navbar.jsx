import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Container from "../common/Container";

const links = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <a
              href="#home"
              className="text-3xl font-semibold tracking-wider"
            >
              Satvik
              <span className="text-[#00E676]">.</span>
            </a>

            <nav className="hidden lg:flex gap-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="uppercase text-sm tracking-[3px] text-gray-300 hover:text-[#8B1538] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-3xl"
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </Container>
      </header>

      <div
        className={`fixed top-20 left-0 w-full bg-[#111111] lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 border-b border-white/10" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="block py-5 text-center uppercase tracking-[3px] border-b border-white/5 hover:bg-[#1a1a1a]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}