import { IntroSectionContainer, Name } from './styles';

import Photo from '../../assets/photo.jpg';

const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <Name>Julian Lin</Name>
      <h2>Front-end Developer</h2>
      <img src={Photo} />
    </IntroSectionContainer>
  )
};

export default IntroSection;