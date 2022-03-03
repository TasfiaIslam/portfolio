import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface SkillsProps extends Props {
  index: number;
}

export const SkillWrapper = ({ children }: Props): JSX.Element => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

export const SkillItem = ({ children, index }: SkillsProps): JSX.Element => {
  return (
    <motion.div
      className={`bg-primary-blue px-3 py-2 flex items-center justify-center text-center font-semibold 
      shadow-md text-white hover:bg-primary-light hover:text-text-light-version cursor-pointer `}
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
  return <div className="p-8 bg-secondary-dark rounded-md">{children}</div>;
};

export const ItemHeaderWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export const Company = ({ children }: Props): JSX.Element => {
  return <p className="pl-6 capitalize text-md text-primary-blue font-bold">{children}</p>;
};
