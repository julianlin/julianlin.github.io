import { FC } from 'react';
import { EducationContainer } from './styles'


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