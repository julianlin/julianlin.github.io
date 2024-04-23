import { IntroSectionContainer, ProfilePicture } from './styles';
import ProfilePhoto from '../../assets/profile-photo.jpg';
import { Typography } from '@mui/material';

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <Typography component='p' variant='h2'>
        Julian Lin
      </Typography>
      <Typography component='p' variant='h4'>
        Front-end Developer
      </Typography>
      <ProfilePicture alt='Julian Lin' src={ProfilePhoto} />
    </IntroSectionContainer>
  );
};
