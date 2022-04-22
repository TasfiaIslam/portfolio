import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IconChevronRight } from '@/components/_icons';

interface Props {
  children: ReactNode;
}

interface AnimationProps {
  className?: string;
}

interface DescriptionProps {
  about: {
    about_me: string;
    my_skills: {
      technology: string;
    }[];
  }[];
}

export const Description = ({ about }: DescriptionProps): JSX.Element => {
  {
    console.log('DESCRIPTION', about);
  }
  const description = about && about[0];
  const skills = description?.my_skills;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="lg:w-3/5 pt-8 pb-12 text-gray-200 text-sm"
    >
      <p>{description?.about_me}</p>
      <p className="pt-4 pb-2">Here are few technologies I've been working with recently</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-[300px]">
        {skills?.map(({ technology }, index) => (
          <div key={index} className="flex space-x-1">
            <span>
              <IconChevronRight />
            </span>
            <p>{technology}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const ProfileWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex items-center space-x-6 text-white py-8">{children}</div>;
};

export const AnimationDiv = ({ className }: AnimationProps): JSX.Element => {
  return (
    <div
      className={`hidden lg:block bg-transparent border-2 border-blue-500 rounded-full w-12 h-12 animate-blob ${className}`}
    ></div>
  );
};
