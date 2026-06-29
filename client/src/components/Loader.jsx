import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-transparent
            backdrop-blur-sm
          "
        >
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.85,
              letterSpacing: "0.2em",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              letterSpacing: "0.35em",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              text-5xl
              md:text-7xl
              font-light
              uppercase
              text-white
              drop-shadow-[0_0_30px_rgba(0,230,118,0.35)]
            "
          >

            <span className="text-[#00E676]"></span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}