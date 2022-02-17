import React from 'react';
import { IconRightArrow } from '@/components/_icons';
import Container from '@/components/_root/container';
import PageSection from '@/components/_root/page-section';
import HeaderText from '@/components/_root/text-heading';
import Skill from './skill';

interface ExperienceProps {
  designation: string;
  company: string;
  address?: string;
  start_date: Date;
  end_date: Date;
  responsibilities?: string[];
  techStack?: { technology: string }[];
}

export interface SkillsProps {
  topSkills?: { technology: string }[];
  others?: { technology: string }[];
}

interface Props {
  experiences: {
    node: ExperienceProps;
  }[];
  skills: SkillsProps;
}

const PRIMARY_COLOR = 'rgb(187 247 208)';

const Experience = ({ experiences, skills }: Props): JSX.Element => {
  return (
    <PageSection id="experience">
      <Container>
        <HeaderText size="h2">Experiences</HeaderText>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-4/6 pt-8">
            <HeaderText size="h4" className="pb-4">
              Work Experiences
            </HeaderText>
            <div className="flex flex-col gap-4 w-11/12 lg:w-9/12">
              {experiences?.map(({ node }, index) => (
                <div key={index} className="p-8 bg-gray-400 rounded-md">
                  <div className="flex justify-between items-center">
                    <HeaderText size="h4" className="capitalize">
                      {index + 1}. {node?.designation}
                    </HeaderText>
                    <p className="italic text-md text-white">
                      {node?.start_date} - {node?.end_date ? node?.end_date : 'present'}
                    </p>
                  </div>
                  <p className="pl-6 capitalize italic text-xl text-green-200 font-bold">
                    {node?.company}
                  </p>
                  <div className="pl-6 pt-2 flex flex-col gap-1">
                    {node.responsibilities?.map((res, resIndex) => (
                      <div key={resIndex} className="flex gap-1 text-gray-200">
                        <IconRightArrow color={PRIMARY_COLOR} />
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/6 pt-8">
            <Skill skills={skills} />
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Experience;