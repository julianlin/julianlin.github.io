import { Typography } from '@mui/material';
import ProfilePhoto from '../../assets/profile-photo.jpg';
import { IntroSectionContainer, ProfilePicture } from './styles';

export const HeaderSection = () => {
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
