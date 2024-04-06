import React, { FC } from 'react';
import styled from 'styled-components';

import {ReactComponent as OpenIcon}
  from '../../assets/open-icon.svg';

const ColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spacing[3]};
  text-align: center;

  h3 {
    color: ${p => p.theme.colors.textPrimary};
    font-size: 1.5rem;
    margin-bottom: ${p => p.theme.spacing[1]};
  }

  h4 {
    color: ${p => p.theme.colors.primary};
    font-size: 1.25rem;
    font-weight: normal;
    margin: ${p => p.theme.spacing[1]};
  }

  ul {
    color: ${p => p.theme.colors.textPrimary};
    line-height: 2rem;
    list-style-type: none;
    padding: 0;

    a {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      text-decoration: none;

      &:visited {
        color: ${p => p.theme.colors.textPrimary};
      }

      &:hover {
        color: ${p => p.theme.colors.light};

        svg {
          fill: ${p => p.theme.colors.light};
        }
      }

    }

    svg {
      cursor: pointer;
      fill: ${p => p.theme.colors.secondary};
      height: 1rem;
      padding-left: ${p => p.theme.spacing[1]};
      width: 1rem;
    }
  }

  svg {
    fill: ${p => p.theme.colors.secondary};
    height: ${p => p.theme.spacing[4]};
    width: ${p => p.theme.spacing[4]};
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    height: 600px;
    margin: 0;
    width: 100%;
  }
`;

const VideoItem = styled.li`
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.light};

    svg {
      fill: ${p => p.theme.colors.light};
    }
  }
`;

type ColumnType = {
  icon: any;
  sections: any[];
  title: string;
}

const Column: FC<ColumnType> = props => {
  const { icon, sections, title } = props;

  return (
    <ColumnContainer>
      {icon}
      <h3>{title}</h3>
      {
        sections.map(section => {
          return (
            <div>
              <h4>{section[0]}</h4>
              <ul>
                {
                  section[1].map((item: string) => {
                    if (Array.isArray(item)) {
                      if (typeof(item[1]) === 'string') {
                        return (
                          <li>
                            <a href={item[1]} target='_blank'>
                              {item[0]}
                              <OpenIcon />
                            </a>
                          </li>
                        );
                      } else {
                        return (
                          <VideoItem onClick={() => item[1](true)}>
                            {item[0]}
                            <OpenIcon />
                          </VideoItem>
                        );
                      }
                    } else {
                      return <li>{item}</li>;
                    }
                  })
                }
              </ul>
            </div>
          );
        })
      }
    </ColumnContainer>
  )
};

export default Column;