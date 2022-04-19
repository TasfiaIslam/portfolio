import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SanityBlockContent from '@sanity/block-content-to-react';
// blockquote

const serializers = ({ size }: { size: 'medium' | 'large' }): any => {
  const fontSize = size === 'large' ? 'lg:text-8xl text-5xl' : 'lg:text-7xl text-4xl';
  return {
    types: {
      sectionTitle: (props: any): JSX.Element => {
        if (props.node.style === 'h3')
          return (
            <h3 className="font-firaSans font-bold text-4xl lg:text-5xl  text-text-dark-version uppercase max-w-md">
              {props.children}
            </h3>
          );
        return (
          <h2
            className={`${fontSize} font-bold font-firaSans uppercase antialiased  text-text-dark-version`}
          >
            {props.children}
          </h2>
        );
      },
    },
  };
};

interface Props {
  blocks: any;
  className?: string;
  size?: 'medium' | 'large';
}

const BlockContent = ({ blocks, className = '', size = 'medium' }: Props): JSX.Element => (
  <SanityBlockContent
    blocks={blocks}
    className={`contentBody ${className}`}
    serializers={serializers({ size })}
    projectId={process.env.GATSBY_PROJECT_ID}
    dataset={process.env.GATSBY_DATASET}
  />
);

export default BlockContent;
