import React from 'react';
import Experience from '.';

export default {
  title: 'Root/Experience',
  component: Experience,
};

const experiences = [
  {
    node: {
      designation: 'software developer',
      company: 'lorem ipsum',
      start_date: new Date(),
      end_date: new Date(),
    },
  },
  {
    node: {
      designation: 'software developer',
      company: 'lorem ipsum',
      start_date: new Date(),
      end_date: new Date(),
    },
  },
  {
    node: {
      designation: 'software developer',
      company: 'lorem ipsum',
      start_date: new Date(),
      end_date: new Date(),
    },
  },
];

export const ExperienceStory = () => <Experience experiences={experiences} />;
