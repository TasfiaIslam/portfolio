import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export const CardContainer = ({ children }: Props): JSX.Element => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      variants={cardVariants}
      className="rounded-md shadow-lg bg-primary p-4"
    >
      {children}
    </motion.div>
  );
};

export const CardDescription = ({ children }: Props): JSX.Element => {
  return <div className="pb-6 text-gray-100">{children}</div>;
};

export const CardFooter = ({ children }: Props): JSX.Element => {
  return <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">{children}</div>;
};
