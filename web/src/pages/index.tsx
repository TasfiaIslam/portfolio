import * as React from 'react';
import Seo from '../components/seo';
import Header from '@/components/_root/header';
import Hero from '@/components/hero';
import { graphql, PageProps } from 'gatsby';
import Projects from '@/components/projects';

const IndexPage = ({ data }: PageProps<any>): JSX.Element => (
  <>
    <Seo title="Home" />
    <Header />
    <Hero
      title={data?.sanityHero?.title}
      sub_header={data?.sanityHero?.sub_header}
      subtitle={data?.sanityHero?.subtitle}
      description={data?.sanityHero?.description}
    />
    <Projects projects={data?.allSanityProject.edges} />
  </>
);

export default IndexPage;

export const query = graphql`
  query {
    sanityHero {
      title
      sub_header
      subtitle
      description
    }
    allSanityProject {
      edges {
        node {
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
        }
      }
    }
  }
`;
