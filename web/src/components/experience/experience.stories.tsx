import React from 'react';
import Experience from '.';

export default {
  title: 'Components/Experience',
  component: Experience,
};

const experience = {
  node: {
    designation: 'software developer',
    company: 'lorem ipsum',
    start_date: new Date(),
    end_date: new Date(),
  },
};

const experiences = Array(6)
  .fill(6)
  .map(() => experience);

const topSkills = Array(6)
  .fill(6)
  .map(() => ({ technology: 'react' }));

const skills = { topSkills: topSkills };

export const ExperienceStory = () => <Experience experiences={experiences} skills={skills} />;
