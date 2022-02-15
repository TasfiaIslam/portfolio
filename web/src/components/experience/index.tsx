import React from 'react';
import Container from '../_root/container';
import PageSection from '../_root/page-section';
import HeaderText from '../_root/text-heading';

interface ExperienceProps {
  designation: string;
  company: string;
  address?: string;
  start_date: Date;
  end_date: Date;
  responsibilities?: string[];
  techStack?: string[];
}

interface Props {
  experiences: {
    node: ExperienceProps;
  }[];
}

const Experience = ({ experiences }: Props): JSX.Element => {
  return (
    <PageSection>
      <Container>
        <HeaderText size="h2">Experiences</HeaderText>
        <div className="flex gap-2">
          <div className="w-4/6 pt-8">
            <HeaderText size="h4" className="pb-4">
              Work Experiences
            </HeaderText>
            {experiences?.map(({ node }, index) => (
              <div key={index} className="pt-8">
                <HeaderText size="h4" className="capitalize">
                  {index + 1}. {node?.designation}
                </HeaderText>
                <p className="text-gray-300 pl-6 capitalize">{node?.company}</p>
                <div>{node.responsibilities?.map((res) => res)}</div>
              </div>
            ))}
          </div>
          <div className="w-2/6 pt-8">
            <HeaderText size="h4">Skill Sets</HeaderText>
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

export default Experience;
