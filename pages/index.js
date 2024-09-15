import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Layout from '../components/Layout';
import { Headline, Overview, CTAButton } from '../components/Typography';
import RectanglesIcon from '../components/RectanglesIcon';
import FeatureHighlight from '../components/FeatureHighlight';
import ComingSoonSection from '../components/ComingSoonSection';
import styles from '../styles/RectanglesIcon.module.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Hero section variants
  const headlineVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } }
  };

  const overviewVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.2 } }
  };

  const ctaVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.7 } }
  };

  // Meet Øxprop section scroll animations
  const meetSectionRef = useRef(null);
  const featureHighlightRef = useRef(null);
  const isMeetSectionInView = useInView(meetSectionRef, { once: true, amount: 0.8 });
  const isFeatureHighlightInView = useInView(featureHighlightRef, { once: true, amount: 0.5 });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>On-Chain Real Estate Investment - Øxprop</title>
      </Head>
      <div className="flex flex-col">
        {/* Hero section */}
        <section className="hero bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16"> {/* Reduced top padding */}
          <div className="site-container">
            <div className="max-w-4xl mt-12 sm:mt-16 md:mt-20 lg:mt-24"> {/* Increased max-width */}
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={headlineVariants}
              >
                <Headline>On-Chain Real Estate Investment</Headline>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={overviewVariants}
              >
                <Overview>Integrating blockchain technology with real estate, offering unique, investment opportunities.</Overview>
              </motion.div>
              <motion.div
                className="mt-12"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={ctaVariants}
              >
                <CTAButton onClick={() => console.log('CTA clicked')}>Coming Soon</CTAButton>
              </motion.div>
            </div>
            <motion.div
              className="mt-16"
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className={styles.svgContainer}>
                <RectanglesIcon isAnimated={isLoaded} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Meet Øxprop section */}
        <section 
          ref={meetSectionRef}
          className="bg-white py-16 sm:py-20 flex items-center justify-center min-h-[70vh]"
        >
          <div className="site-container text-center">
            <motion.div
              initial="hidden"
              animate={isMeetSectionInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="mb-4"
            >
              <Headline>Meet Øxprop</Headline>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isMeetSectionInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              transition={{ delay: 0.2 }} // Slight delay for the tagline
              className="mx-auto max-w-2xl"
            >
              <Overview>The future of real estate investing</Overview>
            </motion.div>
          </div>
        </section>

        {/* Feature Highlight section */}
        <section 
          ref={featureHighlightRef}
          className="bg-white pt-4 pb-16"
        >
          <div className="site-container">
            <FeatureHighlight />
          </div>
        </section>

        {/* Coming Soon Section */}
        <ComingSoonSection />
      </div>
    </Layout>
  );
}