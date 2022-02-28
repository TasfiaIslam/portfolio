import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

const colors = {
  dark: 'text-slate-200',
  light: 'text-gray-800',
};

const textStyle = {
  h1: 'font-bold uppercase',
  h2: 'font-semibold',
  h3: 'font-medium',
  h4: 'font-medium',
};

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export interface Props {
  children: ReactNode;
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  mode?: 'light' | 'dark';
  className?: string;
  color?: string;
}

function HeaderText({
  children,
  size = 'h2',
  mode = 'dark',
  className,
  color,
}: Props): JSX.Element {
  const tailWindClass =
    `${color || colors[mode]} ${textStyle[size]} ` + `${className ? className : ''}`;

  switch (size) {
    case 'h1':
      return (
        <motion.h1
          className={tailWindClass}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={textVariants}
        >
          {children}
        </motion.h1>
      );
    case 'h2':
      return (
        <motion.h2
          className={tailWindClass}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={textVariants}
        >
          {children}
        </motion.h2>
      );
    case 'h3':
      return (
        <motion.h3
          className={tailWindClass}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={textVariants}
        >
          {children}
        </motion.h3>
      );
    case 'h4':
      return <h4 className={tailWindClass}>{children}</h4>;
    default:
      return (
        <motion.h2
          className={tailWindClass}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
        >
          {children}
        </motion.h2>
      );
  }
}

export default HeaderText;
