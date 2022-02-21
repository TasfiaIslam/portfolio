import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
// import { SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';

interface Props {
  children: ReactNode;
}

interface SkillsProps extends Props {
  index: number;
}

const COLORS = ['purple-400', 'yellow-400', 'orange-400', 'blue-400'];

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
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

export const SkillItem = ({ children, index }: SkillsProps): JSX.Element => {
  return (
    <motion.div
      className={`bg-primary px-3 py-2 flex items-center justify-center text-center font-semibold 
      shadow-md text-white hover:text-white cursor-pointer border-${getColorIndex(
        index,
      )} shadow-${getColorIndex(index)} hover:bg-${getColorIndex(index)}`}
      // style={{ borderRadius: '60px' }}
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

export const ItemWrapper = ({ children }: Props): JSX.Element => {
  // return <SwiperSlide className="p-8 bg-gray-400 rounded-md">{children}</SwiperSlide>;
  return <div className="p-8 bg-gray-800 rounded-md">{children}</div>;
};

export const ItemHeaderWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export const Company = ({ children }: Props): JSX.Element => {
  return <p className="pl-6 capitalize text-md text-green-200 font-bold">{children}</p>;
};
