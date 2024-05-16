import { Build, Person } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import BenchVideo from '../../assets/benchpress.mp4';
import SquatVideo from '../../assets/squat.mp4';
import { Column } from './Column';
import { Columns, ProfileSectionContainer } from './styles';
import { ProgrammingLanguages, Libraries } from './constants';

type ProfileSectionType = {
  sectionRef: RefObject<HTMLElement>;
  setVideoSource: Dispatch<SetStateAction<string | undefined>>;
};

export const ProfileSection: FC<ProfileSectionType> = ({
  sectionRef,
  setVideoSource,
}) => {
  return (
    <ProfileSectionContainer ref={sectionRef}>
      <Columns>
        <Column
          icon={<CodeIcon />}
          sections={[
            {
              title: 'Languages',
              items: ProgrammingLanguages,
            },
            {
              title: 'Libraries',
              items: Libraries,
            },
          ]}
          title='Front-End Development'
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
                'Managed a data annotation team for 2 years',
                {
                  text: 'Gold medalist in Wushu',
                  link: 'http://cmat.calwushu.com/cmat19results.html',
                  type: 'LINK',
                },
                {
                  text: 'Squat 400lb',
                  action: () => setVideoSource(SquatVideo),
                  type: 'ACTION',
                },
                {
                  text: 'Bench Press 308lb',
                  action: () => setVideoSource(BenchVideo),
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
