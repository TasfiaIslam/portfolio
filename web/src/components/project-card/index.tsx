import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import HeaderText from '@/components/_root/text-heading';
import { CardContainer, CardDescription, TechStackWrapper } from './styled';
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
  slug: {
    current: string;
  };
}

const ProjectCard = ({
  title,
  image,
  shortDescription,
  gitLink,
  webLink,
  techStack,
  createDate,
  slug,
}: Props): JSX.Element => {
  return (
    <CardContainer>
      <div className="relative z-10 w-full">
        <Image
          src={image}
          className="max-w-full md:h-56 lg:h-48 py-5 relative z-10 opacity-90 group-hover:opacity-100 cursor-pointer"
          objectFit="cover"
        />
        <ProjectCard.Link gitLink={gitLink} webLink={webLink} />
      </div>
      <div className="w-full flex flex-col items-start justify-center p-4">
        <TechStackWrapper>
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="text-primary text-xs font-semibold capitalize cursor-default pr-2"
            >
              {tech.technology}
            </span>
          ))}
        </TechStackWrapper>
        <HeaderText size="h4" className="text-white text-xl group-hover:text-slate-400" mode="dark">
          {title}
        </HeaderText>
        <CardDescription shortDescription={shortDescription} />
        <Link to={`project/${slug?.current}/`} className="w-full">
          <button
            className="w-full text-start mt-4 py-2 text-sm font-semibold bg-primary text-white 
        group-hover:bg-secondary-blue group-hover:text-primary cursor-pointer transition duration-300 ease-out"
          >
            View Details
          </button>
        </Link>
      </div>
      <div className="w-full h-1 absolute left-0 bottom-0 bg-primary"></div>
    </CardContainer>
  );
};

ProjectCard.Link = ({ gitLink, webLink }: LinkProps): JSX.Element => {
  return (
    <div className="flex gap-2 items-center absolute z-20 right-2 top-2">
      {!!gitLink && (
        <Link to={gitLink} className="h-6 w-6 flex items-center">
          <IconGithub color="blue" />
        </Link>
      )}
      {!!webLink && (
        <Link to={webLink} className="h-6 w-6 flex items-center">
          <IconLink />
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
