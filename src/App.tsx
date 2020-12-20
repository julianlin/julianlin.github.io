import React, { useRef, useState } from 'react';
import defaultTheme from './theme'
import styled, { ThemeProvider } from 'styled-components';
import ExperienceSection from './components/ExperienceSection';
import LinksSection from './components/LinksSection';
import IntroSection from './components/IntroSection';
import Navigation from './components/Navigation';
import ProfileSection from './components/ProfileSection';
import Modal from './components/Modal';

const AppContainer = styled.div`
  width: 100%;
  height: 1000px;
`;

function App() {
  const [displayModal, setDisplayModal] = useState(true);
  const pageRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  return (
    <ThemeProvider theme={defaultTheme}>
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
