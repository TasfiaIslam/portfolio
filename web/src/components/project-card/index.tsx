import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import HeaderText from '@/components/_root/text-heading';
import { CardContainer, CardDescription, CardFooter } from './styled';
import Image from '@/components/_root/image';
import Link from 'gatsby-link';
import { IconGithub, IconLink } from '@/components/_icons';

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
      <div className="relative">
        <Image src={image} className="w-full h-48 py-5 object-cover" />
        <ProjectCard.Link gitLink={gitLink} webLink={webLink} />
      </div>
      <div className="w-full flex flex-col items-start justify-center p-4">
        <CardFooter>
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="text-primary text-xs font-semibold capitalize cursor-default pr-2"
            >
              {tech.technology}
            </span>
          ))}
        </CardFooter>
        <HeaderText size="h4" className="text-white text-xl" mode="dark">
          {title}
        </HeaderText>
        <CardDescription>{shortDescription}</CardDescription>
        <button className="w-full text-start py-2 text-sm font-semibold bg-primary text-white">
          View Details
        </button>
      </div>
      <div className="w-full h-1 absolute left-0 bottom-0 bg-primary"></div>
    </CardContainer>
  );
};

ProjectCard.Link = ({ gitLink, webLink }: LinkProps): JSX.Element => {
  return (
    <div className="flex space-x-4 items-center absolute right-4 top-4">
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
