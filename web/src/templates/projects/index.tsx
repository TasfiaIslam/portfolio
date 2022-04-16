import * as React from 'react';
import Seo from '@/components/seo';
import Header from '@/components/_root/header';
import { graphql, PageProps } from 'gatsby';
import Divider from '@/components/_root/divider';
import ProjectCard from '@/components/project-card';

const Project = ({ data }: PageProps<any>): JSX.Element => (
  <>
    <Seo title="Home" />
    <Header />
    <Divider />
    <ProjectCard
      title={data?.sanityProject?.title}
      image={data?.sanityProject?.image}
      webLink={data?.sanityProject?.web_link}
      gitLink={data?.sanityProject?.git_link}
      shortDescription={data?.sanityProject?.shortDescription}
      techStack={data?.sanityProject?.techStack}
      slug={data?.sanityProject?.slug}
    />
  </>
);

export default Project;

export const query = graphql`
  query sanityProjectQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      title
      short_description
      techStack {
        technology
      }
      image {
        asset {
          gatsbyImageData
        }
      }
      web_link
      git_link
      slug {
        current
      }
    }
  }
`;
