import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Seo from '@/components/seo';
import Layout from '@/components/_layout';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Divider from '@/components/_root/divider';
import Experience from '@/components/experience';

const IndexPage = ({ data }: PageProps<any>): JSX.Element => (
  <Layout>
    <Seo title="Tasfia Islam" />
    <Hero
      title={data?.sanityHero?.title}
      sub_header={data?.sanityHero?.sub_header}
      subtitle={data?.sanityHero?.subtitle}
      about={data?.sanityHero?.about}
      profile_links={data?.sanityHero?.profile_links}
    />
    <Divider />
    <Experience experiences={data?.allSanityExperience?.edges} skills={data?.sanitySkills} />
    <Divider />
    <Projects projects={data?.allSanityProject?.edges} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    sanityHero {
      title
      sub_header
      subtitle
      about {
        about_me
        my_skills {
          technology
        }
      }
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
