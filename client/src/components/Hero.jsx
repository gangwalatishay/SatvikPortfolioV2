import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7b1030]/30 blur-[180px]" />

        <div className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[200px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

      </div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-[72px]
          md:text-[130px]
          lg:text-[180px]
          font-sfpro
          tracking-[-0.02em]
          md:tracking-[-0.04em]
          tracking-[0.18em]
          font-light
          text-white
          leading-none
          "
        >
          SATVIK 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: .6 }}
          className="
          mt-8
          uppercase
          tracking-[10px]
          text-xs
          md:text-sm
          text-gray-400
          "
        >
          VIDEO EDITOR • FILMMAKER • VISUAL STORYTELLER
        </motion.p>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 flex flex-col items-center text-gray-500"
      >
        <div className="h-16 w-px bg-gray-500 mb-4"></div>

        <p className="tracking-[6px] uppercase text-[10px]">
          Scroll
        </p>

      </motion.div>
    </section>
  );
}