import React from 'react';
import { motion } from 'framer-motion';

const ComingSoonSection = () => {
  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      <motion.div
        className="rounded-full overflow-hidden w-full max-w-2xl" // Pill shape container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade-in effect for the container
      >
        <motion.img
          src="/image.jpg" // Path to your image in the public folder
          alt="Coming Soon"
          className="w-full h-auto" // Ensure the image fills the container
          initial={{ clipPath: 'inset(100% 0 0 0)' }} // Start with the image hidden
          animate={{ clipPath: 'inset(0% 0 0 0)' }} // Reveal the image pixel by pixel
          transition={{ duration: 1.5 }} // Duration of the pixel reveal effect
        />
      </motion.div>
      <motion.div
        className="absolute text-white text-5xl font-black" // Increased font size and weight
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Delay for text appearance
      >
        Coming Soon
      </motion.div>
    </div>
  );
};

export default ComingSoonSection;