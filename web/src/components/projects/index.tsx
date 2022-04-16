import React from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProjectCard from '@/components/project-card';
import { ProjectContainer } from './styled';
import HeaderText from '@/components/_root/text-heading';
import { Description } from '@/components/hero/styled';

interface Project {
  title: string;
  image?: string | IGatsbyImageData;
  short_description: string;
  git_link?: string;
  web_link?: string;
  techStack: {
    technology: string;
  }[];
  createDate?: Date;
  slug: {
    current: string;
  };
}

interface Props {
  projects: {
    node: Project;
  }[];
}

const Projects = ({ projects }: Props): JSX.Element => {
  return (
    <PageSection mode="dark" id="project">
      <Container>
        <HeaderText size="h2">Projects</HeaderText>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Description>
        <ProjectContainer>
          {projects.map(({ node }, index) => (
            <>
              {console.log('PROJECT DATA', node)}
              <ProjectCard
                key={index}
                title={node?.title}
                gitLink={node?.git_link}
                webLink={node?.web_link}
                techStack={node?.techStack}
                shortDescription={node?.short_description}
                image={node?.image}
                slug={node?.slug}
              />
            </>
          ))}
        </ProjectContainer>
      </Container>
    </PageSection>
  );
};

export default Projects;
