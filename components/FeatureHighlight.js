import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Tokenization',
    description: 'Real estate investment through cutting-edge blockchain technology. 0xProp transforms traditional property ownership into digital assets, offering unparalleled accessibility and liquidity. Our dynamic approach ensures that investors can participate in premium real estate opportunities with unprecedented ease and flexibility.'
  },
  {
    title: 'Real Estate',
    description: 'Curating a portfolio of top-tier properties for discerning investors. 0xProp focuses on high-quality, tier 1 real estate projects that promise strong returns and growth potential. Our commitment to transparency means you\'ll always have clear, comprehensive information about each investment opportunity, empowering you to make informed decisions.'
  },
  {
    title: 'Blockchain',
    description: 'Leveraging the power of blockchain to redefine real estate transactions. 0xProp utilizes secure, transparent, and efficient blockchain technology to streamline property investments. Our platform ensures tamper-proof records, rapid settlements, and reduced intermediary costs, providing a new standard of trust and efficiency in real estate investing.'
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
                    ? 'bg-[#A9E7FF] text-white' // Change to the selected color
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
          <h3 className="text-2xl font-bold mb-4 text-gray-700">{features[activeFeature].title}</h3> {/* Changed to match subtitle color */}
          <p className="text-gray-700">{features[activeFeature].description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
