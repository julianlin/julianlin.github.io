import { useRef, useState } from 'react';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import LinksSection from './components/LinksSection/LinksSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import { Navigation } from './components/Navigation/Navigation';
import ProfileSection from './components/ProfileSection/ProfileSection';
import Modal from './components/Modal';
import { createTheme, ThemeProvider } from '@mui/material';
import { spacing, theme } from './theme';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  background-color: ${theme.palette.primary.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 300px;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  background-color: ${theme.palette.primary.main};
  border-radius: 8px;
  box-shadow:
    rgba(15, 17, 21, 0.25) 0px 4px 6px,
    rgba(15, 17, 21, 0.1) 0px 5px 7px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.xl};
  width: 80%;
`;

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const profileRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer>
        <Navigation
          experienceRef={experienceRef}
          profileRef={profileRef}
          linksRef={linksRef}
        />
        <IntroSection />
        <ContentContainer>
          <ProfileSection
            sectionRef={profileRef}
            setDisplayVideo={setDisplayModal}
          />
          <ExperienceSection sectionRef={experienceRef} />
        </ContentContainer>
        <LinksSection sectionRef={linksRef} />
        <Modal display={displayModal} setDisplayModal={setDisplayModal} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
