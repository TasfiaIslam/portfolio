import React, { ReactNode } from 'react';
import Container from '../../container';

interface Props {
  children: ReactNode;
}

export const HeaderWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className="py-8 bg-bgColor text-gray-200 font-firaSans">
      <Container>{children}</Container>
    </div>
  );
};

export const FlexWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export const LinkWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex items-center space-x-6">{children}</div>;
};
