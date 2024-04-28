import { Build, Person } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Typography } from '@mui/material';
import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import Column from './Column';
import { Columns, ProfileSectionContainer, Summary } from './styles';

type ProfileSectionType = {
  sectionRef: RefObject<HTMLElement>;
  setDisplayVideo: Dispatch<SetStateAction<boolean>>;
};

const ProfileSection: FC<ProfileSectionType> = ({
  sectionRef,
  setDisplayVideo,
}) => {
  return (
    <ProfileSectionContainer ref={sectionRef}>
      <Summary>
        <Typography component='p' variant='h4'>
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
            {
              title: 'Languages',
              items: [
                'Javascript',
                'Typescript',
                'HTML',
                'CSS',
                'SQL',
                'Python',
                'GraphQL',
              ],
            },
            {
              title: 'Libraries',
              items: ['React', 'Apollo', 'styled-components', 'Bootstrap'],
            },
          ]}
          title='Front-end Development'
        />
        <Column
          icon={<Build />}
          sections={[
            { title: 'Frameworks', items: ['Express', 'Next.js'] },
            { title: 'Tools', items: ['GitHub', 'GitLab', 'Invision'] },
          ]}
          title='Dev Tools and Technologies'
        />
        <Column
          icon={<Person />}
          sections={[
            { title: 'Tools', items: ['Invision', 'Jira', 'Confluence'] },
            {
              title: 'Other Skills and Achievements',
              items: [
                'Japanese(JLPT N1)',
                '2 years exp as manager',
                {
                  text: 'Gold medalist in Wushu',
                  link: 'http://cmat.calwushu.com/cmat19results.html',
                  type: 'LINK',
                },
                {
                  text: 'Can squat over 400lb',
                  action: setDisplayVideo,
                  type: 'ACTION',
                },
              ],
            },
          ]}
          title='Everything Else'
        />
      </Columns>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
