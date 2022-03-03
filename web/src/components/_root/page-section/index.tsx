import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  paddingAmount?: 'small' | 'large';
  mode?: 'light' | 'dark' | 'gradient';
  className?: string;
  noScrollReveal?: boolean;
  id?: string;
}

const padding = {
  small: 'py-8 lg:py-16 ',
  large: 'py-20 lg:py-36 ',
};

const backgroundColor = {
  light: 'bg-transparent ',
  dark: 'bg-primary-dark ',
  gradient: 'bg-gradient-to-r from-primary to-secondary ',
};

const PageSection = ({
  children,
  paddingAmount = 'small',
  mode = 'dark',
  className = '',
  noScrollReveal = false,
  id,
}: Props): JSX.Element => {
  let tailWindClass = `${backgroundColor[mode]}`;
  tailWindClass += `${padding[paddingAmount]} ` + className;

  if (noScrollReveal) {
    return <div className={tailWindClass}>{children}</div>;
  }

  return (
    <div
      data-sal="fade"
      data-sal-delay="200"
      data-sal-easing="ease"
      className={tailWindClass}
      id={id ? id : ''}
    >
      {children}
    </div>
  );
};

export default PageSection;
