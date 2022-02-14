import React, { ReactNode } from 'react';

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
  primary: '',
  secondary: 'hover:bg-primary hover:text-gray-200 hover:font-semibold',
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
  tailWindClass += ` rounded-md bg-bgColor text-primary border-2 border-primary`;
  tailWindClass += ` ${hover[type]}`;

  return (
    <button className={tailWindClass} onClick={onClick}>
      <div className={buttonChildrenStyle}>{loading ? 'loading...' : children}</div>
    </button>
  );
};

export default Button;
