import React, { FC } from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  color: ${p => p.theme.colors.text};

  div {
    margin-bottom: ${p => p.theme.spacing[1]};
  }

  h3 {
    color: ${p => p.theme.colors.darkText};
  }
`;

type EducationType = {
  date: string;
  degree: string;
  institution: string;
};

const Education: FC<EducationType> = props => {
  const { date, degree, institution } = props;

  return (
    <EducationContainer>
      <h3>{degree}</h3>
      <div>{institution}</div>
      <div>{date}</div>
    </EducationContainer>
  )
};

export default Education;