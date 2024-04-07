import React, { useRef, useState } from 'react';
import {defaultTheme as defaultTheme1} from './theme'
import styled, { ThemeProvider as ThemeProviderOld } from 'styled-components';
import ExperienceSection from './components/ExperienceSection';
import LinksSection from './components/LinksSection';
import IntroSection from './components/IntroSection';
import Navigation from './components/Navigation/Navigation';
import ProfileSection from './components/ProfileSection';
import Modal from './components/Modal';
import { createTheme, ThemeProvider } from "@mui/material"
import { theme } from './defaultTheme';

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
    <ThemeProviderOld theme={defaultTheme1}>
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
    </ThemeProviderOld>
  );
}

export default App;
