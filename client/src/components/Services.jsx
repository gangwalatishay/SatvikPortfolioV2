import { motion } from "framer-motion";
import {
  HiOutlineFilm,
  HiOutlinePlay,
  HiOutlineSparkles,
  HiOutlineSpeakerWave,
  HiOutlineCommandLine,
  HiOutlineRocketLaunch,
  HiOutlineMusicalNote,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

import Container from "./common/Container";

const services = [
  {
    title: "Social Media Editing",
    description:
      "High-performing Instagram, Facebook, LinkedIn and short-form content.",
    icon: HiOutlineFilm,
  },
  {
    title: "YouTube Editing",
    description:
      "Long-form storytelling, retention editing, pacing and engaging visuals.",
    icon: HiOutlinePlay,
  },
  {
    title: "Commercial & Brand Content",
    description:
      "Premium advertisements, brand campaigns and promotional films.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "Motion Graphics",
    description:
      "Titles, transitions, logo animations and modern motion design.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Visual Enhancement",
    description:
      "Color grading, cinematic look, VFX cleanup and visual polish.",
    icon: HiOutlineRocketLaunch,
  },
//   {
//     title: "Audio Production",
//     description:
//       "Sound design, dialogue cleanup, mixing and music synchronization.",
//     icon: HiOutlineSpeakerWave,
//   },
  {
    title: "Advanced Editing",
    description:
      "Multi-camera editing, storytelling, pacing and seamless transitions.",
    icon: HiOutlineCommandLine,
  },


];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#050505] py-40"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[10px] text-[#00E676] text-xs mb-6">
            Services
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Creative solutions
            <br />
            for every story.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#00E676]/50 hover:bg-[]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00E676]/10 text-[#00E676] transition-all duration-300 group-hover:bg-[#00E676] group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-light mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}