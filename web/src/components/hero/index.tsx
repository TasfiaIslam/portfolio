import React, { ReactNode } from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import HeaderText from '@/components/_root/text-heading';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { Description } from './styled';

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
          <HeaderText size="h1" className="pb-8">
            {title}
          </HeaderText>
          <HeaderText size="h3" className="text-gray-300">
            {subtitle}
          </HeaderText>
          <Description>{description}</Description>
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
