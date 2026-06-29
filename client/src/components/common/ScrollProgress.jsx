import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      const current = window.scrollY;

      setScroll((current / total) * 100);
    };

    window.addEventListener("scroll", update);

    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-[#00E676] z-[9999]"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}