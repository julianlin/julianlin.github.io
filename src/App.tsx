import styled from '@emotion/styled';
import { ThemeProvider, createTheme } from '@mui/material';
import { useRef, useState } from 'react';
import Video from './assets/squat.mp4';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import { LinksSection } from './components/LinksSection/LinksSection';
import { Modal } from './components/Modal/Modal';
import { Navigation } from './components/Navigation/Navigation';
import ProfileSection from './components/ProfileSection/ProfileSection';
import { theme } from './theme';

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
  margin-bottom: ${theme.spacing[4]};
  width: 80%;
`;

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const profileRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  const handleOnCloseModal = () => {
    console.log('test');
    setDisplayModal(false);
  };

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
        <Modal open={displayModal} onClose={handleOnCloseModal}>
          <div>
            <video controls autoPlay src={Video} />
          </div>
        </Modal>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
