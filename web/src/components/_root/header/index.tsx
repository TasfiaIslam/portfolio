import React from 'react';
import Button from '@/components/_root/button';
import { FlexWrapper, HeaderWrapper, LinkItem, LinkWrapper } from './styled';

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <FlexWrapper>
        <div>Logo</div>
        <LinkWrapper>
          <LinkItem href="/#about">About</LinkItem>
          <LinkItem href="/#experience">Experience</LinkItem>
          <LinkItem href="/#project">Projects</LinkItem>
          <LinkItem href="/#contact">Contact</LinkItem>
          <Button type="secondary">Resume</Button>
        </LinkWrapper>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
