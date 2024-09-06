import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Tokenization',
    description: 'Transform real estate assets into digital tokens, enabling fractional ownership and increased liquidity.'
  },
  {
    title: 'Blockchain',
    description: 'Leverage blockchain technology for transparent, secure, and efficient real estate transactions.'
  },
  {
    title: 'Real Estate',
    description: 'Revolutionize traditional real estate investing with innovative digital solutions and global accessibility.'
  }
];

const FeatureHighlight = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start">
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index}>
              <button
                className={`text-left w-full p-4 rounded-lg transition-colors ${
                  activeFeature === index 
                    ? 'bg-blue-500 text-white' // Match CTA button style
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {feature.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3 md:pl-8">
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-500">{features[activeFeature].title}</h3>
          <p className="text-gray-700">{features[activeFeature].description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
