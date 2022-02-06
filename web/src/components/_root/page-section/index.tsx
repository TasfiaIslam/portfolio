import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  paddingAmount?: 'small' | 'large';
  mode?: 'light' | 'dark' | 'gradient';
  className?: string;
  noScrollReveal?: boolean;
}

const padding = {
  small: 'py-16 lg:py-32 ',
  large: 'py-20 lg:py-36 ',
};

const backgroundColor = {
  light: 'bg-transparent ',
  dark: 'bg-bgColor ',
  gradient: 'bg-gradient-to-r from-primary to-secondary ',
};

const PageSection = ({
  children,
  paddingAmount = 'small',
  mode = 'dark',
  className = '',
  noScrollReveal = false,
}: Props): JSX.Element => {
  let tailWindClass = `${backgroundColor[mode]}`;
  tailWindClass += `${padding[paddingAmount]} ` + className;

  if (noScrollReveal) {
    return <div className={tailWindClass}>{children}</div>;
  }

  return (
    <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease" className={tailWindClass}>
      {children}
    </div>
  );
};

export default PageSection;
