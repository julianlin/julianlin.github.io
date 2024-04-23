import { IntroSectionContainer } from './styles';
import ProfilePhoto from '../../assets/profile-photo.jpg';
import { Typography } from '@mui/material';

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <Typography component='p' variant='h3'>
        Julian Lin
      </Typography>
      <Typography component='p' variant='h4'>
        Front-end Developer
      </Typography>
      <img alt='Julian Lin' src={ProfilePhoto} />
    </IntroSectionContainer>
  );
};
