import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/header';
import Footer from '../components/footer';
import { Headline, Overview, CTAButton } from '../components/Typography';
import RectanglesIcon from '../components/RectanglesIcon';
import styles from '../styles/RectanglesIcon.module.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Setting isLoaded to true");
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headlineVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
  };

  const overviewVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.9 } }
  };

  const ctaVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>On-chain Real Estate Investment</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@600&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className="flex-grow">
        <section className="hero bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={headlineVariants}
              >
                <Headline>On-chain Real Estate Investment</Headline>
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
              transition={{ duration: 0.3, delay: 0 }}
            >
              <div className={styles.svgContainer}>
                <RectanglesIcon isAnimated={isLoaded} />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}