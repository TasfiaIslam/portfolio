import React from 'react';
import Hero from '.';
import { IconGithub, IconLink } from '../_icons';

export default {
  title: 'Components/Hero',
  component: Hero,
};

export const HeroStory = () => {
  const profile_links = [
    {
      profile_name: 'github',
      profile_url: '',
      profile_icon: <IconGithub />,
    },
    { profile_name: 'linkedin', profile_url: '', profile_icon: <IconLink /> },
  ];
  return (
    <>
      <Hero
        title="I'm Tasfia Islam"
        sub_header="Hi,"
        subtitle="Software Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        profile_links={profile_links}
      />
    </>
  );
};
