import { i } from 'framer-motion/client';
import React, { useState } from 'react';
import './Faq.css';
const Accordion = ({ children, className = "", variant = "splitted" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isOpen: openIndex === index,
        onToggle: () => handleItemClick(index),
        variant
      });
    }
    return child;
  });

  return (
    <div className={`w-full ${className} ${
      variant === "splitted" ? "space-y-2" : "border rounded-lg overflow-hidden"
    }`}>
      {items}
    </div>
  );
};

const AccordionItem = ({ 
  title, 
  subtitle,
  children, 
  isOpen, 
  onToggle,
  startContent,
  variant = "splitted",
  classNames = {},
  "aria-label": ariaLabel
}) => {
  const defaultClasses = {
    base: `${variant === "splitted" ? "  bg-[#313658]  rounded-lg" : " border-b last:border-b-0"} overflow-hidden`,
    heading: "w-full",
    trigger: "w-full flex justify-between  gap-2 p-4",
    titleWrapper: "flex-1 text-left",
    title: "text-lg font-medium text-white text-left",
    subtitle: "text-sm text-white",
   
    indicator: `transform transition-transform duration-200 text-white`,
    content: "overflow-hidden transition-all duration-200 text-white"
  };

  const mergedClasses = {
    base: `${defaultClasses.base} ${classNames.base || ""}`,
    heading: `${defaultClasses.heading} ${classNames.heading || ""}`,
    trigger: `${defaultClasses.trigger} ${classNames.trigger || ""}`,
    titleWrapper: `${defaultClasses.titleWrapper} ${classNames.titleWrapper || ""}`,
    title: `${defaultClasses.title} ${classNames.title || ""}`,
    subtitle: `${defaultClasses.subtitle} ${classNames.subtitle || ""}`,
    startContent: `${defaultClasses.startContent} ${classNames.startContent || ""}`,
    indicator: `${defaultClasses.indicator} ${classNames.indicator || ""}`,
    content: `${defaultClasses.content} ${classNames.content || ""}`
  };

  return (
    <div className={mergedClasses.base}>
      <div className={mergedClasses.heading}>
        <button 
          onClick={onToggle}
          className={mergedClasses.trigger}
          aria-expanded={isOpen}
          aria-label={ariaLabel}
        >
          {startContent && (
            <div className={mergedClasses.startContent}>
              {startContent}
            </div>
          )}
          <div className={mergedClasses.titleWrapper}>
            <div className={mergedClasses.title}>{title}</div>
            {subtitle && (
              <div className={mergedClasses.subtitle}>{subtitle}</div>
            )}
          </div>
          <svg
            className={`w-6 h-6 ${mergedClasses.indicator} ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div
        className={mergedClasses.content}
        style={{
          maxHeight: isOpen ? '500px' : '0',
          padding: isOpen ? '1rem' : '0 1rem'
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Faq = () => {
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className='faq-title'>Get Answers To Your Confusion</h2>
    <Accordion variant="splitted" className=" p-4">
      <AccordionItem 
      classNames="bg-[#313658]"
        key="1" 
        aria-label="Accordion 1" 
        title="Why the sky is blue?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem 
        key="2" 
        aria-label="Accordion 2" 
        title="Why the grass is green?"
        
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem 
        key="3" 
        aria-label="Accordion 3" 
        title="Accordion 3"
        
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
    </section>
  );
};

export default Faq;