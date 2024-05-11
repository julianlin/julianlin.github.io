import { ThemeProvider, createTheme } from '@mui/material';
import { useRef, useState } from 'react';
import Video from './assets/squat.mp4';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { HeaderSection } from './components/HeaderSection/HeaderSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import { LinksSection } from './components/LinksSection/LinksSection';
import { Modal } from './components/Modal/Modal';
import { Navigation } from './components/Navigation/Navigation';
import ProfileSection from './components/ProfileSection/ProfileSection';
import { AppContainer, ContentContainer } from './styles';
import { theme } from './theme';

export const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  const handleOnCloseModal = () => {
    setDisplayModal(false);
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer>
        <Navigation
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          linksRef={linksRef}
        />
        <HeaderSection />
        <ContentContainer>
          <IntroSection />
          <ExperienceSection sectionRef={experienceRef} />
          <ProfileSection
            sectionRef={skillsRef}
            setDisplayVideo={setDisplayModal}
          />
        </ContentContainer>
        <LinksSection sectionRef={linksRef} />
        <Modal open={displayModal} onClose={handleOnCloseModal}>
          <div>
            <video controls autoPlay src={Video} />
          </div>
        </Modal>
      </AppContainer>
    </ThemeProvider>
  );
};
