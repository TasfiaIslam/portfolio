import React from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import HeaderText from '@/components/_root/text-heading';
import Image from '@/components/_root/image';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { Description, ProfileWrapper } from './styled';
import Button from '@/components/_root/button';

interface Props {
  title: string;
  sub_header?: string;
  subtitle?: string;
  description?: string;
  profile_links?: {
    profile_name?: string;
    profile_url?: string;
    profile_icon?: string | IGatsbyImageData;
  }[];
}

const Hero = ({ title, sub_header, subtitle, description, profile_links }: Props): JSX.Element => {
  return (
    <PageSection id="about">
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
          <ProfileWrapper>
            <Button className="italic">Contact Me</Button>
            {profile_links?.map((profile, index) => (
              <Link key={index} to={profile?.profile_url || ''}>
                <Image src={profile?.profile_icon} className="h-8 w-8" />
              </Link>
            ))}
          </ProfileWrapper>
        </>
      </Container>
    </PageSection>
  );
};

export default Hero;
