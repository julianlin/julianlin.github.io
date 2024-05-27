import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { breakpoints, theme } from '../../theme';

export const Summary = styled.div`
  align-items: center;
  color: ${theme.colors.contrast};
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding-bottom: ${theme.spacing[2]};
  padding-left: ${theme.spacing[2]};
  padding-right: ${theme.spacing[2]};
  text-align: center;

  p {
    margin-bottom: ${theme.spacing[2]};
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 640px;
  }
`;

export const IntroSection = () => {
  return (
    <Summary>
      <Typography component='p' variant='h4'>
        Hi, I'm Julian. Nice to meet you.
      </Typography>
      <Typography>
        I'm a front-end focused software engineer and have worked on a variety
        of projects including a low code/no code machine learning service,
        annotation tools for machine learning, SaaS for real estate and an
        educational website for children. I'm currently on the Amazon SageMaker
        Canvas team at Amazon Web Services.
      </Typography>
    </Summary>
  );
};
