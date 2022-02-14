import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import HeaderText from '@/components/_root/text-heading';
import { CardContainer, CardDescription, CardFooter } from './styled';
import Image from '../_root/image';
import Link from 'gatsby-link';
import { IconGithub, IconLink } from '../_icons';
// import PLACEHOLDER from '@/assets/img/placeholder.png';

interface LinkProps {
  gitLink?: string;
  webLink?: string;
}

interface Props extends LinkProps {
  title: string;
  image?: string | IGatsbyImageData;
  shortDescription: string;
  techStack: {
    technology: string;
  }[];
  createDate?: Date;
}

const ProjectCard = ({
  title,
  image,
  shortDescription,
  gitLink,
  webLink,
  techStack,
  createDate,
}: Props): JSX.Element => {
  return (
    <CardContainer>
      <div className="flex  justify-between">
        <HeaderText size="h4" className="py-3">
          {title}
        </HeaderText>
        <ProjectCard.Link gitLink={gitLink} webLink={webLink} />
      </div>{' '}
      {console.log('Image--->', image)}
      <Image src={image} className="w-full h-64 py-5 rounded-md object-cover" />
      <CardDescription>{shortDescription}</CardDescription>
      <CardFooter>
        {techStack?.map((tech, index) => (
          <p key={index}>{tech.technology}</p>
        ))}
      </CardFooter>
    </CardContainer>
  );
};

ProjectCard.Link = ({ gitLink, webLink }: LinkProps): JSX.Element => {
  return (
    <div className="flex space-x-4 items-center">
      {gitLink && (
        <Link to={gitLink} className="h-12 w-12">
          <IconGithub />
        </Link>
      )}
      {webLink && (
        <Link to={webLink} className="h-12 w-12">
          <IconLink />
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
