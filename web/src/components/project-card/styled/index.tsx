import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export const CardContainer = ({ children }: Props): JSX.Element => {
  return <motion.div className="relative bg-gray-800">{children}</motion.div>;
};

export const CardDescription = ({ children }: Props): JSX.Element => {
  return (
    <div className="py-4 text-xs font-normal text-white h-24 text-ellipsis overflow-hidden ...">
      {children}
    </div>
  );
};

export const CardFooter = ({ children }: Props): JSX.Element => {
  return (
    <div className="max-h-16 overflow-hidden grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 pb-4">
      {children}
    </div>
  );
};
