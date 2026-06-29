import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#00E676]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl tracking-[8px] font-light"
          >
            SATVIK
            <span className="text-[#00C853]">.</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}