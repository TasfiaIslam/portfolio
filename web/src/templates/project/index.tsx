import * as React from 'react';
import Seo from '@/components/seo';
import { graphql, PageProps } from 'gatsby';
import Layout from '@/components/_layout';
import Container from '@/components/_root/container';
import Image from '@/components/_root/image';
import ProjectContent from '@/components/project-content';

const Project = ({ data }: PageProps<any>): JSX.Element => {
  return (
    <Layout>
      <Seo title={data?.sanityProject?.title || 'Project'} />
      <Container>
        <h3 className="pt-16 lg:pt-28 pb-8 lg:pb-16 text-4xl lg:text-7xl font-bold text-text-light-version uppercase font-firaSans lg:w-8/12 mx-auto antialiased">
          {data?.sanityProject?.title}
        </h3>
        <Image
          src={data?.sanityProject?.image}
          className="w-full h-[340px] lg:h-[550px]"
          objectFit="cover"
        />
        <ProjectContent content={data?.sanityProject?._rawContent} />
      </Container>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query sanityProjectQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      slug {
        current
      }
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
      _rawContent
    }
  }
`;
