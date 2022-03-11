import React, { ReactNode } from 'react';
import PageSection from '@/components/_root/page-section';
import Container from '@/components/_root/container';
import HeaderText from '@/components/_root/text-heading';
import Image from '@/components/_root/image';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { AnimationDiv, Description, ProfileWrapper } from './styled';
import Button from '@/components/_root/button';
import Typical from 'react-typical';

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
    <PageSection id="about">
      <Container>
        <div className="flex">
          <div className="w-2/3">
            <HeaderText size="h3" color="text-primary-blue">
              {sub_header}
            </HeaderText>
            <HeaderText size="h1" className="pb-8">
              {title}
            </HeaderText>
            <Typical
              steps={[`${subtitle}`, 1000, 'React Developer', 1000, 'Frontend Enthusiast', 1000]}
              wrapper="p"
              loop={Infinity}
              className="text-2xl text-text-dark-version font-semibold"
            />
            <Description>{description}</Description>
            <ProfileWrapper>
              <Button className="italic">Contact Me</Button>
              {profile_links?.map((profile, index) => (
                <Link key={index} to={profile?.profile_url || ''}>
                  <Image src={profile?.profile_icon} className="h-8 w-8" />
                </Link>
              ))}
            </ProfileWrapper>
          </div>
          <div className="w-1/3 relative">
            <AnimationDiv className="absolute top-40 left-4"></AnimationDiv>
            <AnimationDiv className="animation-delay-2000 absolute top-52 right-8"></AnimationDiv>
            <AnimationDiv className="animation-delay-4000 absolute bottom-32 left-36"></AnimationDiv>
            <AnimationDiv className="animation-delay-2000 absolute top-64 left-16"></AnimationDiv>
            <AnimationDiv className="animation-delay-4000 absolute top-12 left-44"></AnimationDiv>
            <AnimationDiv className="animation-delay-4000 absolute top-48 left-52"></AnimationDiv>
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Hero;
