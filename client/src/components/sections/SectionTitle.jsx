import { motion } from "framer-motion";

export default function SectionTitle({
  subtitle,
  title,
  highlight,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <p className="uppercase tracking-[5px] text-[#8B1538] mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl md:text-6xl font-light">
        {title}{" "}
        <span className="text-[#8B1538]">
          {highlight}
        </span>
      </h2>
    </motion.div>
  );
}