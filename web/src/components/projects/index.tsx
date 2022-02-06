import React from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProjectCard from '@/components/project-card';
import { ProjectContainer } from './styled';

interface Project {
  title: string;
  image?: string | IGatsbyImageData;
  shortDescription: string;
  gitLink?: string;
  webLink?: string;
  techStack: {
    technology: string;
  }[];
  createDate?: Date;
}

interface Props {
  projects: {
    node: Project;
  }[];
}

const Projects = ({ projects }: Props): JSX.Element => {
  return (
    <PageSection>
      <Container>
        <ProjectContainer>
          {projects.map(({ node }, index) => (
            <ProjectCard
              key={index}
              title={node?.title}
              techStack={node?.techStack}
              shortDescription={node?.shortDescription}
            />
          ))}
        </ProjectContainer>
      </Container>
    </PageSection>
  );
};

export default Projects;
