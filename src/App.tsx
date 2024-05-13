import { ThemeProvider, createTheme } from '@mui/material';
import { useRef, useState } from 'react';
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
  const [videoSource, setVideoSource] = useState<string | undefined>(undefined);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  const handleOnCloseModal = () => {
    setVideoSource(undefined);
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
            setVideoSource={setVideoSource}
          />
        </ContentContainer>
        <LinksSection sectionRef={linksRef} />
        <Modal open={!!videoSource} onClose={handleOnCloseModal}>
          <div>
            <video controls autoPlay src={videoSource} />
          </div>
        </Modal>
      </AppContainer>
    </ThemeProvider>
  );
};
