import React from 'react';
import styled from 'styled-components';

import Photo from '../assets/photo.jpg';

const IntroSectionContainer = styled.section`
  align-items: center;
  color: ${p => p.theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${p => p.theme.spacing[4]};
  width: 100%;

  img {
    border-radius: 50%;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`;

const Title = styled.h2`

`;

const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <Name>Julian Lin</Name>
      <Title>Front-end Developer</Title>
      <img src={Photo} />
    </IntroSectionContainer>
  )
};

export default IntroSection;