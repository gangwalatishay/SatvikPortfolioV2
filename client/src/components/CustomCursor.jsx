import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="hidden lg:block fixed z-[9998] pointer-events-none"
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    >
      <div className="w-6 h-6 rounded-full border border-[#8B1538]" />
    </div>
  );
}