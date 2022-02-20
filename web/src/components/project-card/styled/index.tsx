import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export const CardContainer = ({ children }: Props): JSX.Element => {
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 30,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      variants={cardVariants}
      className="rounded-md shadow-md bg-primary shadow-gray-500"
    >
      {children}
    </motion.div>
  );
};

export const CardDescription = ({ children }: Props): JSX.Element => {
  return <div className="pb-3 px-4 text-gray-100">{children}</div>;
};

export const CardFooter = ({ children }: Props): JSX.Element => {
  return <div className="grid grid-cols-3 lg:grid-cols-4 px-4 pb-4">{children}</div>;
};
