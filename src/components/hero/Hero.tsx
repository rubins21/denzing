import { GradientGrid } from "./GradientGrid";
import { Beams } from "../utils/Beams";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { SplashButton } from "../buttons/SplashButton";
import { GhostButton } from "../buttons/GhostButton";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative isolate">
        <GradientGrid />
        <Beams />
        <div className="py-24 sm:py-32 lg:pb-40">
          <MaxWidthWrapper className="relative mt-16 z-20">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
                className="text-5xl font-semibold tracking-tight text-balance [background-image:linear-gradient(90deg,#67bd7d_0%,#538560_100%)] [-webkit-background-clip:text] [background-clip:text] text-transparent sm:text-8xl"
              >
                AI Data Analysts Built For Your Company
              </motion.h1>
              <motion.p
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
                className="mt-8 text-lg font-medium text-pretty text-copy-light sm:text-xl/8"
              >
               Denzing answers any question about your business data through AI data analysts that are trained to understand you and your business.
              </motion.p>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.25, delay: 0.75, ease: "easeInOut" }}
                className="mt-10 flex items-start gap-x-6"
              >
                <SplashButton className="flex items-center gap-2">
                  Get started
                  <FiArrowRight />
                </SplashButton>
                <GhostButton className="text-copy">
                  Learn more <span aria-hidden="true">→</span>
                </GhostButton>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.25, delay: 1, ease: "easeInOut" }}
              className="mt-16 flow-root sm:mt-24"
            >
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full"
                >
                  <source src="https://media.voiceflow.com/video/workflows-3.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </MaxWidthWrapper>
        </div>
      </div>
    </section>
  );
};
