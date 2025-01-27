'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { i } from 'framer-motion/client';
import './Faq.css';
const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container faq bg-[hsl(43deg 100% 50%)] mx-auto pb-10 pt-2">
      <h1 className="faq-title uppercase text-center text-4xl font-bold pt-2 pb-4">Get Answers To Your Confusion</h1>
      <div className="h-fit rounded  p-2 bg-[#1174fd]">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${index !== tabs.length - 1 ? 'border-b' : ''}`}
          >
            <button
              className="p-3 px-2 w-full cursor-pointer text-2xl items-center transition-all font-semibold dark:text-white text-black flex gap-2"
              onClick={() => handleClick(index)}
            >
              <Plus
                className={`transition-transform  ease-in-out w-5 h-5 ${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                } dark:text-gray-200 text-gray-600`}
              />
              {tab.title}
            </button>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.14,
                  }}
                >
                  <p className="dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]">
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;