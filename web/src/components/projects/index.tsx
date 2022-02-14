import React from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProjectCard from '@/components/project-card';
import { ProjectContainer } from './styled';
import HeaderText from '../_root/text-heading';

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
  {
    console.log('projects', projects);
  }
  return (
    <PageSection mode="dark">
      <Container>
        <HeaderText size="h1" className="pb-8 md:pb-16">
          Projects I have worked on
        </HeaderText>
        <ProjectContainer>
          {projects.map(({ node }, index) => (
            <>
              {console.log('description', node.short_description)}
              <ProjectCard
                key={index}
                title={node?.title}
                techStack={node?.techStack}
                shortDescription={node?.short_description}
              />
            </>
          ))}
        </ProjectContainer>
      </Container>
    </PageSection>
  );
};

export default Projects;
