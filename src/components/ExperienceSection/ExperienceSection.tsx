import { FC, RefObject } from 'react';
import { Company } from './Company';
import { Education } from './Education';
import { ContentWrapper, ExperienceSectionContainer } from './styles';
import { Typography } from '@mui/material';
import { jobs } from './jobs';

type ExperienceSectionType = {
  sectionRef: RefObject<HTMLElement>;
};

export const ExperienceSection: FC<ExperienceSectionType> = ({
  sectionRef,
}) => {
  return (
    <ExperienceSectionContainer ref={sectionRef}>
      <ContentWrapper>
        <Typography variant='h2'>Experience</Typography>
        {jobs.map((job) => (
          <Company
            companyName={job.companyName}
            startDate={job.startDate}
            endDate={job.endDate}
            link={job.link}
            positions={[
              {
                description: job.description,
                name: job.positionName,
              },
            ]}
          />
        ))}
      </ContentWrapper>
      <ContentWrapper>
        <Typography variant='h2'>Education</Typography>
        <Education
          date='2016-2019'
          degree='M.S., Computer Science and Engineering'
          institution='Santa Clara University, Santa Clara, CA'
        />
        <Education
          date='2011-2015'
          degree='B.S., Computer Engineering'
          institution='University of California, Davis, CA'
        />
      </ContentWrapper>
    </ExperienceSectionContainer>
  );
};
