import React from 'react';
import Button from '@/components/_root/button';
import { FlexWrapper, HeaderWrapper, LinkItem, LinkWrapper } from './styled';
import * as styles from './style.module.css';

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <FlexWrapper>
        <div className={styles.mask}>T</div>
        <LinkWrapper>
          <LinkItem href="/#about">About</LinkItem>
          <LinkItem href="/#experience">Experience</LinkItem>
          <LinkItem href="/#project">Projects</LinkItem>
          <LinkItem href="/#contact">Contact</LinkItem>
          <Button href={`/tasfia-islam-resume.pdf`} target="_blank">
            Resume
          </Button>
        </LinkWrapper>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
