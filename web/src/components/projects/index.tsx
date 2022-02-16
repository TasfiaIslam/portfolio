import React from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProjectCard from '@/components/project-card';
import { ProjectContainer } from './styled';
import HeaderText from '../_root/text-heading';
import { Description } from '../hero/styled';

interface Project {
  title: string;
  image?: string | IGatsbyImageData;
  short_description: string;
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
    <PageSection mode="dark">
      <Container>
        <HeaderText size="h2" className="pb-8">
          Projects
        </HeaderText>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Description>
        <ProjectContainer>
          {projects.map(({ node }, index) => (
            <>
              {console.log('description', node.short_description)}
              <ProjectCard
                key={index}
                title={node?.title}
                techStack={node?.techStack}
                shortDescription={node?.short_description}
                image={node?.image}
              />
            </>
          ))}
        </ProjectContainer>
      </Container>
    </PageSection>
  );
};

export default Projects;
