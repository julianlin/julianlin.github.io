import { IntroSectionContainer, Name } from './styles';

import ProfilePhoto from '../../assets/profile-photo.jpg';

const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <Name>Julian Lin</Name>
      <h2>Front-end Developer</h2>
      <img alt="Julian Lin" src={ProfilePhoto} />
    </IntroSectionContainer>
  );
};

export default IntroSection;
