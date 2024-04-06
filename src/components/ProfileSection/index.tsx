import React, { FC, RefObject } from 'react';
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
  color: ${p => p.theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${p => p.theme.spacing[4]};
  padding-top: ${p => p.theme.spacing[4]};
  width: 100%;
`;

type ProfileSectionType = {
  sectionRef: RefObject<HTMLElement>;
  setDisplayVideo: any;
}

const ProfileSection: FC<ProfileSectionType> = props => {
  const { sectionRef, setDisplayVideo } = props;

  return (
    <ProfileSectionContainer ref={sectionRef}>
      <Summary>
        <h3>Hi, I'm Julian. Nice to meet you.</h3>
        <p>
          I've been a software engineer for over 4 years and have worked on a
          variety of projects including annotation tools for machine learning,
          an educational website for children, and SaaS for real estate.
          I'm currently on the front-end team at WealthPark in Tokyo, Japan.
        </p>
      </Summary>
      <Columns>
        <Column
          icon={<FrontEndIcon />}
          sections={
            [
              ['Languages', ['Javascript', 'Typescript', 'HTML', 'CSS', 'SQL', 'Python', 'GraphQL']],
              ['Libraries', ['React', 'Apollo', 'styled-components', 'Bootstrap']]
            ]
          }
          title='Front-end Development'
        />
        <Column
          icon={<DesignAndTechIcon />}
          sections={
            [
              ['Frameworks', ['Express', 'Next.js']],
              ['Tools', ['GitHub', 'GitLab', 'Invision']]
            ]
          }
          title='Dev Tools and Technologies'
         />
        <Column
          icon={<OtherSkillsIcon />}
          sections={
            [
              ['Tools', ['Invision', 'Jira', 'Confluence']],
              [
                'Other Skills and Achievements',
                [
                  'Japanese(JLPT N1)',
                  '2 years exp as manager',
                   ['Gold medalist in Wushu', 'http://cmat.calwushu.com/cmat19results.html'],
                   ['Can squat over 400lb', setDisplayVideo]
                ]
              ]
            ]
          }
          title='Everything Else'
        />
      </Columns>
    </ProfileSectionContainer>
  )
};

export default ProfileSection;