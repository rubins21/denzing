import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import styles from './StickyCards.module.scss';
import Lenis from 'lenis';

interface CardData {
  title: string;
  heading: string;
  description: string;
  image: string;
  color: string;
}

interface CardProps extends CardData {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const cards: CardData[] = [
  {
    title: "Step 1",
    heading: "Give the agent data",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/step1.png",
    color: "#E8F3FF"
  },
  {
    title: "Step 2",
    heading: "Train your agent",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/step2.png",
    color: "#FFF3E8"
  },
  {
    title: "Step 3",
    heading: "Deploy and monitor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/step3.png",
    color: "#E8FFE9"
  }
];

const Card = ({ title, heading, description, image, color, i, progress, range, targetScale }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        className={styles.card}
        style={{ 
          backgroundColor: color, 
          scale, 
          top: `calc(-5vh + ${i * 25}px)`,
          opacity,
          y
        }}
      >
        <div className={styles.content}>
          <div className={styles.text}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.step}
            >
              {title}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {heading}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
          <div className={styles.imageContainer}>
            <motion.div 
              className={styles.inner}
              style={{ scale: imageScale }}
            >
              <Image
                src={image}
                alt={heading}
                width={400}
                height={300}
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StickyCards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Initialize Lenis for this section only
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    // Store the original scroll position
    const originalScrollY = window.scrollY;

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Only apply smooth scrolling when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lenisInstance.start();
          } else {
            lenisInstance.stop();
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      lenisInstance.destroy();
      // Restore the original scroll position
      window.scrollTo(0, originalScrollY);
    };
  }, []);

  useEffect(() => {
    if (!lenis || !containerRef.current) return;

    const onScroll = () => {
      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -bounds.top / (bounds.height - window.innerHeight)));
        scrollYProgress.set(progress);
      }
    };

    lenis.on('scroll', onScroll);

    return () => {
      lenis.off('scroll', onScroll);
    };
  }, [lenis, scrollYProgress]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <motion.div 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>3 steps to build and Use Agent</h2>
      </motion.div>
      <div ref={containerRef} className={styles.cardsContainer}>
        {cards.map((card, i) => {
          const targetScale = 1 - ((cards.length - i) * 0.05);
          return (
            <Card
              key={i}
              {...card}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}; 