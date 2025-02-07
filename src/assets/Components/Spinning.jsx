import React from 'react';
import { motion } from 'framer-motion';

const CircularText = () => {
  const topText = "LOYIHANGIZNI";
  const bottomText = "YARATING";
  
  const createTextPositions = (text, startAngle, endAngle) => {
    const characters = text.split('');
    const totalChars = characters.length;
    const angleRange = endAngle - startAngle;
    const angleStep = angleRange / (totalChars - 1);
    
    return characters.map((char, i) => ({
      char,
      angle: startAngle + (i * angleStep),
    }));
  };

  const topChars = createTextPositions(topText, -80, 80);
  const bottomChars = createTextPositions(bottomText, 110, 250);

  return (
    <div className="relative w-32 h-32"> {/* Circle size */}
      <motion.div 
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Yellow circle background */}
        <div className="absolute inset-0 rounded-full bg-yellow-400" />
        
        {/* Black center hole */}
        <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-sm transform scale-110" />
        </div>
        
        {/* Text container */}
        <div className="absolute inset-0">
          {/* Top text */}
          {topChars.map(({ char, angle }, i) => {
            const radius = 53; // Slightly reduced radius to move text 2px inward
            const radian = (angle * Math.PI) / 180;
            const x = radius * Math.cos(radian);
            const y = radius * Math.sin(radian);
            
            return (
              <div
                key={`top-${i}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(${x}px, ${y}px)
                    translate(-50%, -50%)
                    rotate(${angle + 90}deg)
                  `,
                  
                }}
              >
                <span className="block text-sm font-bold text-gray-900 tracking-[2px]">
                  {char}
                </span>
              </div>
            );
          })}
          
          {/* Bottom text */}
          {bottomChars.map(({ char, angle }, i) => {
            const radius = 53; // Slightly reduced radius to move text 2px inward
            const radian = (angle * Math.PI) / 180;
            const x = radius * Math.cos(radian);
            const y = radius * Math.sin(radian);
            
            return (
              <div
                key={`bottom-${i}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(${x}px, ${y}px)
                    translate(-50%, -50%)
                    rotate(${angle + 90}deg)
                  `,
                }}
              >
                <span className="block text-sm font-bold text-gray-900 tracking-wide">
                  {char}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CircularText;