import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  type?: 'primary' | 'secondary' | 'text';
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
  block?: boolean;
  href?: string;
  target?: string;
  className?: string;
}

const hover = {
  primary: 'hover:bg-primary-blue hover:text-text-dark-version hover:font-semibold',
  secondary: 'hover:bg-primary-blue hover:text-text-dark-version hover:font-semibold',
  text: '',
};

const buttonChildrenStyle = 'flex items-center justify-center gap-2 whitespace-nowrap';

const Button = ({
  type = 'primary',
  children,
  onClick,
  loading,
  block,
  href,
  target,
  className = '',
}: Props): JSX.Element => {
  let tailWindClass = `${className} text-center relative whitespace-nowrap px-3 py-2 font-firaSans tracking-wide`;
  tailWindClass += ` rounded-md bg-secondary text-primary-blue border-2 border-primary-blue`;
  tailWindClass += ` ${hover[type]}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={tailWindClass}>
        {loading ? 'loading...' : children}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      className={tailWindClass}
      onClick={onClick}
    >
      <div className={buttonChildrenStyle}>{loading ? 'loading...' : children}</div>
    </motion.button>
  );
};

export default Button;
