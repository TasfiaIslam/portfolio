import React, { CSSProperties } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  src?: string | IGatsbyImageData | any | undefined;
  alt?: string;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  objectFit?: 'cover' | 'contain';
}

const Image = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  objectFit = 'cover',
  style,
}: Props): JSX.Element => {
  if (!src) {
    return <div />;
  }
  if (typeof src === 'string')
    return <img src={src} alt={alt} className={className} style={style} />;

  return (
    <GatsbyImage
      image={src?.asset?.gatsbyImageData}
      alt={alt}
      className={className}
      imgClassName={imgClassName}
      style={style}
      objectFit={objectFit}
    />
  );
};

export default Image;
