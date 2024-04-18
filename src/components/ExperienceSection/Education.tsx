import { Typography } from '@mui/material';
import { FC } from 'react';
import { EducationContainer } from './styles';

type EducationType = {
  date: string;
  degree: string;
  institution: string;
};

export const Education: FC<EducationType> = ({ date, degree, institution }) => {
  return (
    <EducationContainer>
      <Typography variant='h3'>{degree}</Typography>
      <Typography>{institution}</Typography>
      <Typography>{date}</Typography>
    </EducationContainer>
  );
};
