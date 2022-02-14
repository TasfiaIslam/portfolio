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
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer"
          >
            Contact
          </Link>
          <Button>Resume</Button>
        </LinkWrapper>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
