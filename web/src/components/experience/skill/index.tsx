import HeaderText from '@/components/_root/text-heading';
import React from 'react';
import { SkillsProps } from '..';
import { SkillItem, SkillWrapper } from '../styled';

interface Props {
  skills: SkillsProps;
}

const Skill = ({ skills }: Props): JSX.Element => {
  return (
    <>
      <HeaderText size="h4" className="pb-8">
        Skill Sets
      </HeaderText>
      <>
        <SkillWrapper>
          {skills?.topSkills?.map((skill, i) => (
            <SkillItem key={i} index={i}>
              {skill?.technology}
            </SkillItem>
          ))}
        </SkillWrapper>
      </>
    </>
  );
};

export default Skill;
