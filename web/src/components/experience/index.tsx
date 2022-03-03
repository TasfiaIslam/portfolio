import React from 'react';
import { IconRightArrow } from '@/components/_icons';
import Container from '@/components/_root/container';
import PageSection from '@/components/_root/page-section';
import HeaderText from '@/components/_root/text-heading';
import Skill from './skill';
import { Company, ItemHeaderWrapper, ItemWrapper } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface ExperienceProps {
  designation: string;
  company: string;
  address?: string;
  start_date: Date;
  end_date: Date;
  responsibilities?: string[];
  techStack?: { technology: string }[];
}

interface ItemProps {
  index: number;
  node: ExperienceProps;
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

const PRIMARY_COLOR = '#4895EF';

const Experience = ({ experiences, skills }: Props): JSX.Element => {
  return (
    <PageSection id="experience">
      <Container>
        <HeaderText size="h2">Experiences</HeaderText>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="lg:w-4/6 pt-8">
            <HeaderText size="h4" className="pb-4">
              Work Experiences
            </HeaderText>
            <div className="lg:w-11/12 xl:w-9/12">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination, EffectCards, Autoplay]}
                spaceBetween={10}
                grabCursor={true}
              >
                {experiences?.map(({ node }, index) => (
                  <SwiperSlide key={index}>
                    <Experience.Item key={index} index={index} node={node} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="lg:w-2/6 pt-8">
            <Skill skills={skills} />
          </div>
        </div>
      </Container>
    </PageSection>
  );
};

Experience.Item = ({ index, node }: ItemProps): JSX.Element => {
  return (
    <ItemWrapper>
      <ItemHeaderWrapper>
        <HeaderText size="h4" className="capitalize">
          {index + 1}. {node?.designation}
        </HeaderText>
        <p className="text-xs text-white">
          {node?.start_date} - {node?.end_date ? node?.end_date : 'present'}
        </p>
      </ItemHeaderWrapper>
      <Company>{node?.company}</Company>
      <div className="pl-1 lg:pl-6 pt-2 flex flex-col gap-1">
        <p className="text-slate-200 py-4">Responsibilites</p>
        {node.responsibilities?.map((res, resIndex) => (
          <div key={resIndex} className="flex gap-2 text-gray-200 text-sm">
            <IconRightArrow color={PRIMARY_COLOR} size={'18'} />
            {res}
          </div>
        ))}
      </div>
    </ItemWrapper>
  );
};

export default Experience;
