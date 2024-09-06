import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { Headline, Overview, CTAButton } from '../components/Typography';
import RectanglesIcon from '../components/RectanglesIcon';
import FeatureHighlight from '../components/FeatureHighlight';
import styles from '../styles/RectanglesIcon.module.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Setting isLoaded to true");
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
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>On-Chain Real Estate Investment</title>
        {/* Other head elements */}
      </Head>
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="hero bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
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
                <CTAButton onClick={() => console.log('CTA clicked')}>Get Started</CTAButton>
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
          className="bg-white py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center" 
          style={{ minHeight: '40vh' }}
        >
          <div className="text-center">
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
            >
              <Overview>The future of real estate investing</Overview>
            </motion.div>
          </div>
        </section>

        {/* Feature Highlight section */}
        <section 
          ref={featureHighlightRef}
          className="bg-white pt-4 pb-16 px-4 sm:px-6 lg:px-8" // Reduced top padding
        >
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            animate={isFeatureHighlightInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <FeatureHighlight />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}