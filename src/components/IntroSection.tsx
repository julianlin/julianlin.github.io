import React from 'react';
import styled from 'styled-components';
import photo from '../assets/photo.jpeg';

const IntroSectionContainer = styled.section`
  align-items: center;
  color: ${p => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
      <img src={photo} />
    </IntroSectionContainer>
  )
};

export default IntroSection;