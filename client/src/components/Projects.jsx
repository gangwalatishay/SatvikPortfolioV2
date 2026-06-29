import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "./common/Container";

const projects = [
  {
    title: "The Amazing Spiderman 2",
   

    image:
      "/images/1.webp",
    youtube:"https://youtube.com/shorts/oE2v9nnziIQ?feature=share"
  },
  {
    title: "Youtube Shorts",
  
    
    image:
      "/images/2.png",
    youtube:"https://www.youtube.com/shorts/VhUi-2k3-O0"
  },  {
    title: "Youtube Shorts",
  

    image:
      "/images/3.png",
    youtube:"https://www.youtube.com/shorts/c9QEvsT-dKY"
  },

  {
    title: "Corporate Film",

    image:
      "/images/4.png",
    youtube:"https://www.youtube.com/shorts/ms0bjGEP66w"
  },
  {
    title: "Motion Graphics",


    image:
      "/images/5.png",
    youtube:"https://www.youtube.com/watch?v=BfDkouC00Wg",

  },
    {
    title: "Graphics",

    image:
      "/images/6.png",
    youtube:"https://www.youtube.com/watch?v=v7K8JAG9nwM"
  }

];

export default function Projects() {
  return (
    <section
      id="work"
      className="py-36 bg-[#050505]"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="uppercase tracking-[8px] text-[#00E676] text-xs mb-5">
            Selected Work
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Featured Projects
            <br />
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.a
  href={project.youtube}
  target="_blank"
  rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className="group cursor-pointer"
            >
                  
              <div className="relative overflow-hidden rounded-3xl">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-[520px]
                  lg:h-[620px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:rotate-[0.5deg]
                  "
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                {/* <div className="absolute top-6 left-6">

                  <span className="px-4 py-2 rounded-full border border-[#8B1538]/40 bg-[#8B1538]/10 backdrop-blur-md text-[#d58aa1] uppercase tracking-[3px] text-[11px]">

                    {project.category}

                  </span>

                </div> */}

              </div>

<div className="mt-8 flex justify-between items-start">

  <div>

    <h3 className="text-3xl md:text-4xl font-light">
      {project.title}
    </h3>

    <p className="mt-3 text-gray-500 tracking-[3px] uppercase text-xs">
      {project.year}
    </p>

  </div>

  <a
    href={project.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-14
      h-14
      rounded-full
      border
      border-white/10
      flex
      items-center
      justify-center
      group-hover:bg-[#00E676]
      group-hover:border-[#00E676]
      transition-all
      duration-300
    "
  >
    <HiArrowUpRight
      size={22}
      className="group-hover:rotate-45 transition-transform duration-300"
    />
  </a>

</div>

</motion.a>
          ))}

        </div>

      </Container>
    </section>
  );
}