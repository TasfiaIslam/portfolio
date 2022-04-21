import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ProjectContainer = ({ children }: Props): JSX.Element => {
  return <div className="grid md:grid-cols-3 gap-y-20 lg:gap-x-8">{children}</div>;
};
