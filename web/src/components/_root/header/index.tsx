import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import Button from '@/components/_root/button';
import { FlexWrapper, HeaderWrapper, LinkItem, LinkWrapper } from './styled';
import { IconClose, IconMenu } from '@/components/_icons';
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
        <SideNav />
      </FlexWrapper>
    </HeaderWrapper>
  );
};

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const SideNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const container = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        ease: 'easeOut',
        duration: 0.05,
        delay: 0.03,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.05,
        delay: 0.03,
      },
    },
  };
  return (
    <>
      <div
        className="lg:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IconMenu />
      </div>
      <motion.div
        className={
          isOpen
            ? 'block lg:hidden fixed top-0 right-0 pt-24 w-80 h-full overflow-hidden z-50 bg-slate-800 text-white '
            : 'hidden lg:hidden'
        }
        variants={container}
        initial="hidden"
        animate={!isOpen ? 'hidden' : 'show'}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <div
          className="absolute h-10 w-10 top-2 left-2 flex items-center justify-center bg-white"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IconClose />
        </div>
        <ul className="font-poppins text-base antialiased flex flex-col space-y-6 p-4 mb-8 text-white">
          <Link to="/#about">About</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#project">Projects</Link>
          <Link to="/#contact">Contact</Link>
          <Button href={`/tasfia-islam-resume.pdf`} target="_blank">
            Resume
          </Button>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
