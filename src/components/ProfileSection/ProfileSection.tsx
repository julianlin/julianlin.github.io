import { Build, Person } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import BenchVideo from '../../assets/benchpress.mp4';
import SquatVideo from '../../assets/squat.mp4';
import { Column } from './Column';
import { Columns, ProfileSectionContainer } from './styles';
import { ProgrammingLanguages, Libraries, Tools } from './constants';
import { createVideoItem } from './utils';

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
            { title: 'Tools', items: Tools },
          ]}
          title='Dev Tools and Technologies'
        />
        <Column
          icon={<Person />}
          sections={[
            {
              items: [
                'Japanese(JLPT N1)',
                'Managed a data annotation team',
                {
                  text: 'Gold medalist in Wushu',
                  link: 'http://cmat.calwushu.com/cmat19results.html',
                  type: 'LINK',
                },
                createVideoItem('Squat 400lb', () =>
                  setVideoSource(SquatVideo),
                ),
                createVideoItem('Bench Press 308lb', () =>
                  setVideoSource(BenchVideo),
                ),
              ],
            },
          ]}
          title='Everything Else'
        />
      </Columns>
    </ProfileSectionContainer>
  );
};
