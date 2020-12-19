import React from 'react';
import styled from 'styled-components';

import Column from './Column';
import {ReactComponent as FrontEndIcon}
  from '../../assets/front-end-development-icon.svg';
import {ReactComponent as DesignAndTechIcon}
  from '../../assets/design-and-technology-icon.svg';
import {ReactComponent as OtherSkillsIcon}
  from '../../assets/other-skills-icon.svg';

const Columns = styled.div`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: ${p => p.theme.spacing[2]};
  max-width: 1200px;

  >div:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.light};
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    >div:not(:last-child) {
      border-bottom: none;
      border-right: 1px solid ${p => p.theme.colors.light};
    }
    flex-direction: row;
    width: 100%;
  }
`;

const Summary = styled.div`
  align-items: center;
  color: ${p => p.theme.colors.contrast};
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding-bottom: ${p => p.theme.spacing[4]};
  padding-left: ${p => p.theme.spacing[2]};
  padding-right: ${p => p.theme.spacing[2]};
  text-align: center;

  h3 {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    max-width: 640px;
  }
`;

const ProfileSectionContainer = styled.section`
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${p => p.theme.spacing[4]};
  padding-top: ${p => p.theme.spacing[4]};
  width: 100%;
`;

const ProfileSection = (props: any) => {
  const { sectionRef } = props;

  return (
    <ProfileSectionContainer ref={sectionRef}>
      <Summary>
        <h3>Hi, I'm Julian. Nice to meet you.</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Summary>
      <Columns>
        <Column
          icon={<FrontEndIcon />}
          title='Front-end Development'
        />
        <Column
          icon={<DesignAndTechIcon />}
          title='Tools and Technologies'
         />
        <Column
          icon={<OtherSkillsIcon />}
          title='Other Skills'
        />
      </Columns>
    </ProfileSectionContainer>
  )
};

export default ProfileSection;