import React from 'react';

interface Props {
  color?: string;
  size?: string;
}

const IconRightArrow = ({ color = 'currentColor', size = '24' }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
};

export default IconRightArrow;
