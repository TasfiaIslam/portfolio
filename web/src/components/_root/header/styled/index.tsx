import React, { ReactNode } from 'react';
import Container from '@/components/_root/container';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

interface Props {
  children: ReactNode;
}

interface LinkProps extends Props {
  href?: string;
}

export const HeaderWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className="py-8 bg-secondary-dark text-text-dark-version font-firaSans">
      <Container>{children}</Container>
    </div>
  );
};

export const FlexWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export const LinkWrapper = ({ children }: Props): JSX.Element => {
  return <div className="hidden lg:flex items-center space-x-6">{children}</div>;
};

export const LinkItem = ({ children, href }: LinkProps): JSX.Element => {
  return (
    <AnchorLink
      to={href ? href : '/'}
      className="border-b-2 border-transparent hover:border-b-2 hover:border-primary-blue cursor-pointer transition 
      ease-out delay-100 hover:-translate-y-1 duration-300 hover:transition-all"
    >
      {children}
    </AnchorLink>
  );
};
