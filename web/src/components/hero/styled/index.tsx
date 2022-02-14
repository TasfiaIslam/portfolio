import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Description = ({ children }: Props): JSX.Element => {
  return <p className="w-4/5 py-4 text-gray-400">{children}</p>;
};
