import { Card } from "@/components/utils/Card";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiBox,
  FiPhone,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = true;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (features.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (offset >= 0) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32"
      ref={ref}
    >
      <div className="relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-3">
              <SectionHeading>Features</SectionHeading>
              <SectionSubheading>
              Build, scale and manage your entire AI workforce with one platform
                
              </SectionSubheading>
            </div>
            <div className="flex items-center gap-3">
              <button
                className={`rounded-md bg-gradient-to-br from-primary-light to-primary-dark p-2.5 text-primary-content ring-2 ring-primary/50 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-primary/70 ${
                  !CAN_SHIFT_LEFT && "opacity-50 cursor-not-allowed"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
                aria-label="Previous slide"
              >
                <FiArrowLeft className="size-4" />
              </button>
              <button
                className={`rounded-md bg-gradient-to-br from-primary-light to-primary-dark p-2.5 text-primary-content ring-2 ring-primary/50 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-primary/70 ${
                  !CAN_SHIFT_RIGHT && "opacity-50 cursor-not-allowed"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
                aria-label="Next slide"
              >
                <FiArrowRight className="size-4" />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${features.length}, 1fr)`,
            }}
          >
            {features.map((post) => {
              return <Feature key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, description, Icon }: FeatureType) => {
  return (
    <Card
      className="group shrink-0 bg-white transition-all hover:shadow-lg"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <div className="relative">
        <Icon className="size-12 rounded-full bg-gradient-to-br from-primary-light to-primary-dark p-3 text-primary-content shadow-md transition-transform group-hover:scale-110" />
      </div>
      <p className="mb-2 mt-4 text-lg font-semibold text-gray-900">{title}</p>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </Card>
  );
};

export default Carousel;

type FeatureType = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    Icon: FiArrowUp,
    title: "Clarification Questions",
    description:
      "Just like real analysts, the AI agents will ask follow up questions when it is confused, to ensure that the answers they give are exactly what you want.",
  },
  {
    id: 2,
    Icon: FiShield,
    title: "Enterprise-grade Security",
    description:
      "Your data is protected with state-of-the-art encryption and security measures.",
  },
  {
    id: 3,
    Icon: FiUsers,
    title: "Shows Steps",
    description:
      "If you are interested in how the Agent got to the answer. You can peek inside what it does. AI in Denzing is no longer a black box",
  },
  {
    id: 4,
    Icon: FiPhone,
    title: "Drilling",
    description:
      "If you want to dig deeper in your data you can just click on what you are interested in to explore further.",
  },
  {
    id: 5,
    Icon: FiBox,
    title: "Monitor Usage",
    description:
      "See how people are using agents to constantly tweak and improve them over time.",
  },
  {
    id: 6,
    Icon: FiBox,
    title: "Share Chat",
    description:
      "If you find a cool insight, you can share what you find with others. ",
  },
];
