import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ProjectContainer = ({ children }: Props): JSX.Element => {
  return <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">{children}</div>;
};
