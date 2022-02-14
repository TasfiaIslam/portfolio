import React, { ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode | string;
}
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  const containerClass = `px-10 md:px-16 lg:px-24  ${className} `;
  return <div className={containerClass}>{children}</div>;
};

export default Container;
