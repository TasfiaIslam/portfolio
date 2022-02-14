import React, { ReactNode } from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import HeaderText from '@/components/_root/text-heading';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Link from 'gatsby-link';

interface Props {
  title: string;
  sub_header?: string;
  subtitle?: string;
  description?: string;
  profile_links?: {
    profile_name?: string;
    profile_url?: string;
    profile_icon?: string | IGatsbyImageData | ReactNode;
  }[];
}

const Hero = ({ title, sub_header, subtitle, description, profile_links }: Props): JSX.Element => {
  return (
    <PageSection>
      <Container>
        <>
          <HeaderText size="h3" color="text-primary">
            {sub_header}
          </HeaderText>
          <HeaderText size="h1">{title}</HeaderText>
          <HeaderText color="text-gray-300">{subtitle}</HeaderText>
          <p className="w-4/5 py-4 text-gray-400">{description}</p>
          <div className="flex items-center space-x-6 text-white">
            {profile_links?.map((profile, index) => (
              <Link key={index} to={profile?.profile_url || ''}>
                {profile?.profile_icon}
              </Link>
            ))}
          </div>
        </>
      </Container>
    </PageSection>
  );
};

export default Hero;
