import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const DESCRIPTION_CHAR_LIMIT = 200;

interface Props {
  children: ReactNode;
}

interface DescriptionProps {
  shortDescription: string;
}

export const CardContainer = ({ children }: Props): JSX.Element => {
  return <motion.div className="relative bg-gray-800 group cursor-pointer">{children}</motion.div>;
};

export const CardDescription = ({ shortDescription }: DescriptionProps): JSX.Element => {
  return (
    <div className="py-4 text-xs font-normal text-slate-200 h-24 text-ellipsis overflow-hidden ...">
      {shortDescription && shortDescription.length > DESCRIPTION_CHAR_LIMIT
        ? `${shortDescription.substring(0, DESCRIPTION_CHAR_LIMIT)} ...`
        : shortDescription}
    </div>
  );
};

export const TechStackWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className="h-[48px] max-h-16 overflow-hidden grid grid-cols-3 xl:grid-cols-4  gap-1 pb-4">
      {children}
    </div>
  );
};
