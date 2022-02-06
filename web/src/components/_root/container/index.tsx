import React, { ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode | string;
}
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  const containerClass = `px-10 xl:px-auto xl:container ${className} `;
  return <div className={containerClass}>{children}</div>;
};

export default Container;
