import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardContainer = ({ children }: Props): JSX.Element => {
  return <div className="rounded-md shadow-lg bg-secondary p-4">{children}</div>;
};

export const CardDescription = ({ children }: Props): JSX.Element => {
  return <div className="pb-6 text-gray-200">{children}</div>;
};

export const CardFooter = ({ children }: Props): JSX.Element => {
  return <div className="flex space-x-4 text-primary">{children}</div>;
};
