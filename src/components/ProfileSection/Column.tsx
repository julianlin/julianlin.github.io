import { OpenInNew } from '@mui/icons-material';
import { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { Typography } from '@mui/material';
import { ColumnContainer, VideoItem } from './styles';

type LinkType = {
  text: string;
  link: string;
  type: 'LINK';
};

type ActionType = {
  text: string;
  action: Dispatch<SetStateAction<boolean>>;
  type: 'ACTION';
};

type SectionType = {
  title?: string;
  items: (ActionType | LinkType | string)[];
};

type ColumnType = {
  icon: ReactElement;
  sections: SectionType[];
  title: string;
};

export const Column: FC<ColumnType> = ({ icon, sections, title }) => {
  return (
    <ColumnContainer>
      {icon}
      <Typography component='h2' variant='h5'>{title}</Typography>
      {sections.map((section) => {
        return (
          <div>
            {title && (
              <Typography component='h3' variant='h6'>
                {section.title}
              </Typography>
            )}
            <ul>
              {section.items.map((item) => {
                if (typeof item === 'string') {
                  return <li>{item}</li>;
                } else if (item.type === 'LINK') {
                  return (
                    <li>
                      <a href={item.link} rel='noreferrer' target='_blank'>
                        {item.text}
                        <OpenInNew />
                      </a>
                    </li>
                  );
                } else if (item.type === 'ACTION') {
                  return (
                    <VideoItem onClick={() => item.action(true)}>
                      {item.text}
                      <OpenInNew />
                    </VideoItem>
                  );
                }
              })}
            </ul>
          </div>
        );
      })}
    </ColumnContainer>
  );
};
