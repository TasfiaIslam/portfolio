import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface SkillsProps extends Props {
  index: number;
}

const COLORS = ['purple-300', 'green-300', 'orange-300', 'blue-300'];

const getColorIndex = (i: number): string => {
  if (i % 4 === 0) {
    return COLORS[0];
  }
  if (i % 4 === 1) {
    return COLORS[1];
  }
  if (i % 4 === 2) {
    return COLORS[2];
  }
  if (i % 4 === 3) {
    return COLORS[3];
  }
  return COLORS[0];
};

export const SkillWrapper = ({ children }: Props): JSX.Element => {
  return <div className="grid grid-cols-3 xl:grid-cols-5 gap-4">{children}</div>;
};

export const SkillItem = ({ children, index }: SkillsProps): JSX.Element => {
  return (
    <motion.div
      className={`bg-white py-2 flex items-center justify-center text-center font-semibold 
      shadow-md text-blue-700 hover:text-white cursor-pointer border-${getColorIndex(
        index,
      )} shadow-${getColorIndex(index)} hover:bg-${getColorIndex(index)}`}
      style={{ borderRadius: '60px' }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};
