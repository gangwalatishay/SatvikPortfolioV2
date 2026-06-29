import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

import Container from "./common/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-40"
    >
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#00C853]/20 blur-[180px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[10px] text-[#00E676] text-xs mb-8">
              Contact
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-tight">

              Let's create
              <br />

              something
              <span className="text-[#00E676]">
                {" "}remarkable.
              </span>

            </h2>

            <p className="mt-10 text-gray-400 text-lg leading-9 max-w-md">
              Whether it's a commercial, YouTube video,
              documentary or social campaign,
              I'm always excited to collaborate on
              meaningful visual stories.
            </p>

            <div className="space-y-8 mt-16">

              <div className="flex items-center gap-5">

                <HiOutlineEnvelope
                  className="text-[#00E676]"
                  size={24}
                />

                <span className="text-gray-300">
                  satvikrawal@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-5">

                <HiOutlinePhone
                  className="text-[#00E676]"
                  size={24}
                />

                <span className="text-gray-300">
                  +91 7355444422
                </span>

              </div>

              <div className="flex items-center gap-5">

                <HiOutlineMapPin
                  className="text-[#00E676]"
                  size={24}
                />

                <span className="text-gray-300">
                  India
                </span>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-700 py-5 outline-none text-white placeholder:text-gray-500 focus:border-[#00E676] transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-700 py-5 outline-none text-white placeholder:text-gray-500 focus:border-[#00E676] transition"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-gray-700 py-5 outline-none text-white placeholder:text-gray-500 resize-none focus:border-[#00E676] transition"
            />

            <button
              type="submit"
              className="
              mt-8
              px-10
              py-4
              rounded-full
              bg-[#00C853]
              hover:bg-[#00E676]
              transition
              text-white
              tracking-[3px]
              uppercase
              text-sm
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </Container>
    </section>
  );
}