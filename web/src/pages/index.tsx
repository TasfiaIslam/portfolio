import * as React from 'react';
import Seo from '@/components/seo';
import Header from '@/components/_root/header';
import Hero from '@/components/hero';
import { graphql, PageProps } from 'gatsby';
import Projects from '@/components/projects';
import Divider from '@/components/_root/divider';
import Experience from '@/components/experience';

const IndexPage = ({ data }: PageProps<any>): JSX.Element => (
  <>
    <Seo title="Home" />
    <Header />
    <Hero
      title={data?.sanityHero?.title}
      sub_header={data?.sanityHero?.sub_header}
      subtitle={data?.sanityHero?.subtitle}
      description={data?.sanityHero?.description}
      profile_links={data?.sanityHero?.profile_links}
    />
    <Divider />
    <Experience experiences={data?.allSanityExperience?.edges} skills={data?.sanitySkills} />
    <Divider />
    <Projects projects={data?.allSanityProject?.edges} />
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
      profile_links {
        profile_name
        profile_url
        profile_icon {
          asset {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
    allSanityExperience {
      edges {
        node {
          designation
          company
          address
          start_date
          end_date
          responsibilities
        }
      }
    }
    sanitySkills {
      topSkills {
        technology
      }
    }
    allSanityProject {
      edges {
        node {
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
    }
  }
`;
