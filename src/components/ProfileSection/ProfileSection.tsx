import { Build, Person } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { FC, RefObject } from 'react';
import Column from './Column';
import { Columns, ProfileSectionContainer, Summary } from './styles';
import { Typography } from '@mui/material';

type ProfileSectionType = {
  sectionRef: RefObject<HTMLElement>;
  setDisplayVideo: any;
};

const ProfileSection: FC<ProfileSectionType> = (props) => {
  const { sectionRef, setDisplayVideo } = props;

  return (
    <ProfileSectionContainer ref={sectionRef}>
      <Summary>
        <Typography component="p" variant="h4">
          Hi, I'm Julian. Nice to meet you.
        </Typography>
        <Typography>
          I've been a software engineer for over 4 years and have worked on a
          variety of projects including annotation tools for machine learning,
          an educational website for children, and SaaS for real estate. I'm
          currently on the front-end team at WealthPark in Tokyo, Japan.
        </Typography>
      </Summary>
      <Columns>
        <Column
          icon={<CodeIcon />}
          sections={[
            [
              'Languages',
              [
                'Javascript',
                'Typescript',
                'HTML',
                'CSS',
                'SQL',
                'Python',
                'GraphQL',
              ],
            ],
            [
              'Libraries',
              ['React', 'Apollo', 'styled-components', 'Bootstrap'],
            ],
          ]}
          title="Front-end Development"
        />
        <Column
          icon={<Build />}
          sections={[
            ['Frameworks', ['Express', 'Next.js']],
            ['Tools', ['GitHub', 'GitLab', 'Invision']],
          ]}
          title="Dev Tools and Technologies"
        />
        <Column
          icon={<Person />}
          sections={[
            ['Tools', ['Invision', 'Jira', 'Confluence']],
            [
              'Other Skills and Achievements',
              [
                'Japanese(JLPT N1)',
                '2 years exp as manager',
                [
                  'Gold medalist in Wushu',
                  'http://cmat.calwushu.com/cmat19results.html',
                ],
                ['Can squat over 400lb', setDisplayVideo],
              ],
            ],
          ]}
          title="Everything Else"
        />
      </Columns>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
