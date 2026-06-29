import { motion } from "framer-motion";
import Container from "./common/Container";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-44"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#00C853]/15 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[180px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[10px] text-[#00E676] text-xs mb-8">
            About
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#00E676] mb-12"
          />

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-6xl text-5xl md:text-7xl lg:text-8xl font-light leading-[1.08]"
          >
            Crafting stories that
            <br />

            <span className="text-[#00E676]">
              people don't just watch—
            </span>

            <br />

            they remember.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-14 max-w-2xl text-lg md:text-xl text-gray-400 leading-9"
          >
            Transforming raw footage into cinematic experiences through
            thoughtful editing, motion design and visual storytelling.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}