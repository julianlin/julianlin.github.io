import { OpenInNew } from '@mui/icons-material';
import { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { ColumnContainer, VideoItem } from './styles';

type LinkType = {
  text: string;
  link: string;
};

type ActionType = {
  text: string;
  action: Dispatch<SetStateAction<boolean>>;
};

type SectionType = {
  title: string;
  items: (ActionType | LinkType | string)[];
};

type ColumnType = {
  icon: ReactElement;
  sections: SectionType[];
  title: string;
};

const Column: FC<ColumnType> = ({ icon, sections, title }) => {
  return (
    <ColumnContainer>
      {icon}
      <h3>{title}</h3>
      {sections.map((section) => {
        return (
          <div>
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item) => {
                if (Array.isArray(item)) {
                  if (typeof item[1] === 'string') {
                    return (
                      <li>
                        <a href={item[1]} rel='noreferrer' target='_blank'>
                          {item[0]}
                          <OpenInNew />
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <VideoItem onClick={() => item[1](true)}>
                        {item[0]}
                        <OpenInNew />
                      </VideoItem>
                    );
                  }
                } else {
                  return <li>{item}</li>;
                }
              })}
            </ul>
          </div>
        );
      })}
    </ColumnContainer>
  );
};

export default Column;
