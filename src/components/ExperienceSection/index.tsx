import React from 'react';
import styled from 'styled-components';

import Company from './Company';

const ContentWrapper = styled.div`
  border: 1px solid ${p => p.theme.colors.light};
  border-radius: 12px;
  max-width: 1200px;
  padding: ${p => p.theme.spacing[2]};
  margin: ${p => p.theme.spacing[2]};

  @media only screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    padding: ${p => p.theme.spacing[3]};
    width: 100%;
  }
`;

const ExperienceSectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${p => p.theme.spacing[2]};
  margin-top: ${p => p.theme.spacing[2]};
  width: 100%;
`;

const ExperienceSection = (props: any) => {
  const { sectionRef } = props;

  return (
    <ExperienceSectionContainer ref={sectionRef}>
      <ContentWrapper>
        <h2>Experience</h2>
        <Company
          companyName='WealthPark'
          link='https://wealth-park.com/en/'
          positions={[
            {
              description: [
                'Implement responsive web applications(both internal and SaaS) from concept to deployment',
                'Assess UI/UX designs for technical feasibility',
                'Tech stack: Javascript, Typescript, React, GraphQL, Apollo, Kubernetes, GitLab CI/CD'
              ],
              name: 'Software Engineer'
            }
          ]}
        />
        <Company
          companyName='Santa Clara University'
          link='https://ywca-sv.org/curated-pathways-to-innovation/'
          positions={[
            {
              description: [
                'Worked on the Curated Pathways to Innovation(CPI) project which is a website that aims to set women and underrepresented minorities on the path to STEM Careers and has over 2000 users',
                'Worked with teachers and other members of the CPI team to create features to increase engagement of student users',
                'Tech stack: PHP, Javascript, MySQL, Laravel, jQuery, Ajax, Bootstrap'
              ],
              name: 'Full Stack Software Engineer'
            }
          ]}
        />
        <Company
          companyName={'Drive.ai'}
          link='https://en.wikipedia.org/wiki/Drive.ai'
          positions={[
            {
              description: [
                'Developed and maintained data annotation tools used to create data sets for machine learning with over 100,000 images',
                'Worked closely with the data annotation team to optimize user experience and output speed',
                'Developed and maintained various web and desktop applications for both internal and external use',
                'Tech stack: Python, Javascript, MySQL, Flask, React, Redux, Electron, Kubernetes, Jenkins'
              ],
              name: 'Software Engineer'
            }
          ]}
        />
      </ContentWrapper>
    </ExperienceSectionContainer>
  )
};

export default ExperienceSection;