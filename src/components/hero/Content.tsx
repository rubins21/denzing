import { FiArrowRight } from "react-icons/fi";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { SplashButton } from "../buttons/SplashButton";
import { GhostButton } from "../buttons/GhostButton";
import { GlowingChip } from "../utils/GlowingChip";
import { useRouter } from "next/router";

export const Content = () => {
  const router = useRouter();
  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-start justify-center pb-12 pt-24 md:pb-36 md:pt-36">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      >
        
      </motion.div>
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.25, ease: "easeInOut" }}
        className="mb-3 text-left text-3xl font-bold leading-tight [background-image:linear-gradient(90deg,#67bd7d_0%,#538560_100%)] [-webkit-background-clip:text] [background-clip:text] text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight"
      >
        AI Data Analysts Built For Your Company
      </motion.h1>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
        className="mb-9 max-w-2xl text-left text-base text-copy-light sm:text-lg md:text-xl"
      >
       Denzing answers any question about your business data through AI data analysts that are trained to understand you and your business.
      </motion.p>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.75,
          ease: "easeInOut",
        }}
        className="flex flex-col items-start gap-4 sm:flex-row"
      >
        <SplashButton
          onClick={() => router.push("/signin")}
          className="flex items-center gap-2"
        >
          Try it free
          <FiArrowRight />
        </SplashButton>
        <GhostButton
          onClick={() => router.push("/#features")}
          className="rounded-md px-4 py-2 text-lg text-copy"
        >
          Learn more
        </GhostButton>
      </motion.div>
    </MaxWidthWrapper>
  );
};
