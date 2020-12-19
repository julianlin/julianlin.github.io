import React from 'react';
import styled from 'styled-components';

import Company from './Company';

const ContentWrapper = styled.div`
  max-width: 1200px;
  padding: ${p => p.theme.spacing[3]};
`;

const ExperienceSectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ExperienceSection = (props: any) => {
  const { sectionRef } = props;

  return (
    <ExperienceSectionContainer ref={sectionRef}>
      <ContentWrapper>
        <h2>Experience</h2>
        <Company />
        <Company />
        <Company />
        <Company />
      </ContentWrapper>
    </ExperienceSectionContainer>
  )
};

export default ExperienceSection;