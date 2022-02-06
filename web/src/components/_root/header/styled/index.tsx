import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const HeaderWrapper = ({ children }: Props): JSX.Element => {
  return <div className="p-4 bg-bgColor text-gray-200 font-firaSans">{children}</div>;
};

export const FlexWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export const LinkWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex items-center space-x-6">{children}</div>;
};
