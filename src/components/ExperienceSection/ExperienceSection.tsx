import React, { FC, RefObject } from 'react';
import { ContentWrapper, ExperienceSectionContainer } from './styles';
import Company from './Company';
import Education from './Education';

type ExperienceSectionType = {
  sectionRef: RefObject<HTMLElement>;
};

const ExperienceSection: FC<ExperienceSectionType> = (props) => {
  const { sectionRef } = props;

  return (
    <ExperienceSectionContainer ref={sectionRef}>
      <ContentWrapper>
        <h2>Experience</h2>
        <Company
          companyName="WealthPark"
          date="Jan 2020 - Present"
          link="https://wealth-park.com/en/"
          positions={[
            {
              description: [
                'Develop asset management and administration platforms for investors and the largest property management companies in Japan',
                'Implement responsive web applications that work in multiple languages and browsers using Javascript, Typescript, React, HTML, CSS, styled-components, GraphQL, Apollo',
                'Assess UI/UX designs for usability and technical feasibility',
                'Deploy and manage applications using Kubernetes, GitLab CI/CD, AWS',
              ],
              name: 'Software Engineer',
            },
          ]}
        />
        <Company
          companyName="Santa Clara University"
          date="Jun 2019 - Dec 2020"
          link="https://ywca-sv.org/curated-pathways-to-innovation/"
          positions={[
            {
              description: [
                'Worked on the Curated Pathways to Innovation(CPI) project which is a website that aims to set women and underrepresented minorities on the path to STEM Careers and has over 2000 users',
                'Worked with teachers to create features to increase engagement of student users',
                'Developed features for and maintained the CPI web application using PHP, Javascript, MySQL, Laravel, jQuery, Ajax, Bootstrap',
              ],
              name: 'Full Stack Software Engineer',
            },
          ]}
        />
        <Company
          companyName="Drive.ai"
          date="July 2015 - Jun 2019"
          link="https://en.wikipedia.org/wiki/Drive.ai"
          positions={[
            {
              description: [
                "Developed data annotation tools used to create data sets for machine learning with 100,000's of images using Python, Javascript, MySQL, Flask, React, Redux, Electron, Kubernetes, AWS",
                'Maintained and developed features for 3D bounding box and lane annotation tools',
                'Worked closely with the data annotation team to optimize user experience and output speed',
                'Developed various web and desktop applications for internal and external use including data set viewers, metrics dashboards, and user management dashboards',
              ],
              name: 'Software Engineer',
            },
          ]}
        />
      </ContentWrapper>
      <ContentWrapper>
        <h2>Education</h2>
        <Education
          date="2016-2019"
          degree="M.S., Computer Science and Engineering"
          institution="Santa Clara University, Santa Clara, CA"
        />
        <Education
          date="2011-2015"
          degree="B.S., Computer Engineering"
          institution="University of California, Davis, CA"
        />
      </ContentWrapper>
    </ExperienceSectionContainer>
  );
};

export default ExperienceSection;
