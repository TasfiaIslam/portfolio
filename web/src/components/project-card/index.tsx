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
        <Image src={image} className="w-full h-64 py-5 rounded-md object-cover" />
        <ProjectCard.Link gitLink={gitLink} webLink={webLink} />
      </div>
      <HeaderText size="h4" className="py-3 px-4" mode="light">
        {title}
      </HeaderText>
      <CardDescription>{shortDescription}</CardDescription>
      <CardFooter>
        {techStack?.map((tech, index) => (
          <div key={index} className="flex items-center  text-white py-1 cursor-default">
            {tech.technology}
          </div>
        ))}
      </CardFooter>
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
