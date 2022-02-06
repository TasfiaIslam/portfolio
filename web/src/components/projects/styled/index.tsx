import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ProjectContainer = ({ children }: Props): JSX.Element => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};
