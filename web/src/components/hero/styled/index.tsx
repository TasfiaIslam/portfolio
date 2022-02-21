import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export const Description = ({ children }: Props): JSX.Element => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="lg:w-4/5 pt-8 pb-12 text-gray-200 text-sm"
    >
      {children}
    </motion.p>
  );
};

export const ProfileWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex items-center space-x-6 text-white py-8">{children}</div>;
};
