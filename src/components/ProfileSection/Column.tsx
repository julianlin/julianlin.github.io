import { FC } from 'react';
import { ColumnContainer, VideoItem } from './styles';
import { OpenInNew } from '@mui/icons-material';

type ColumnType = {
  icon: any;
  sections: any[];
  title: string;
};

const Column: FC<ColumnType> = (props) => {
  const { icon, sections, title } = props;

  return (
    <ColumnContainer>
      {icon}
      <h3>{title}</h3>
      {sections.map((section) => {
        return (
          <div>
            <h4>{section[0]}</h4>
            <ul>
              {section[1].map((item: string) => {
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
