import { Typography } from '@mui/material';
import { Summary } from './styles';
import { useI18n } from '../../hooks/useI18n';

export const IntroSection = () => {
  const { i18n } = useI18n();
  return (
    <Summary>
      <Typography component='p' variant='h4'>
        {i18n.intro.header}
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
