import React from 'react';
import Link from 'gatsby-link';
import Button from '@/components/_root/button';
import { FlexWrapper, HeaderWrapper, LinkWrapper } from './styled';

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <FlexWrapper>
        <div>Logo</div>
        <LinkWrapper>
          <Link to="/">About</Link>
          <Link to="/">Experience</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contact</Link>
          <Button>Resume</Button>
        </LinkWrapper>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
