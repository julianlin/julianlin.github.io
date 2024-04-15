import React, { useRef, useState } from 'react';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import LinksSection from './components/LinksSection/LinksSection';
import IntroSection from './components/IntroSection/IntroSection';
import Navigation from './components/Navigation/Navigation';
import ProfileSection from './components/ProfileSection/ProfileSection';
import Modal from './components/Modal';
import { createTheme, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  height: 1000px;
  min-width: 300px;
  width: 100%;
`;

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer ref={pageRef}>
        <Navigation
          experienceRef={experienceRef}
          pageRef={pageRef}
          profileRef={profileRef}
          linksRef={linksRef}
        />
        <IntroSection />
        <ProfileSection
          sectionRef={profileRef}
          setDisplayVideo={setDisplayModal}
        />
        <ExperienceSection sectionRef={experienceRef} />
        <LinksSection sectionRef={linksRef} />
        <Modal
          display={displayModal}
          setDisplayModal={setDisplayModal}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
