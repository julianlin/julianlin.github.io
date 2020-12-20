import React, { FC } from 'react';
import styled from 'styled-components';

import {ReactComponent as OpenIcon}
  from '../../assets/open-icon.svg';

const CompanyContainer = styled.div`
  color: ${p => p.theme.colors.text};

  a {
    align-items: center;
    color: ${p => p.theme.colors.text};
    display: flex;
    text-decoration: none;

    &:visited: {
      color: ${p => p.theme.colors.text};
    }

    &:hover {
      color: ${p => p.theme.colors.light};

      svg {
        fill: ${p => p.theme.colors.light};
      }
    }

    svg {
      cursor: pointer;
      fill: ${p => p.theme.colors.text};
      height: 1rem;
      padding-left: ${p => p.theme.spacing[1]};
      width: 1rem;
    }
  }

  div {
    margin-bottom: ${p => p.theme.spacing[1]};
  }

  h3 {
    color: black;
  }
`;

type CompanyType = {
  companyName: string;
  date: string;
  link: string;
  positions: any;
};

const Company: FC<CompanyType> = props => {
  const { companyName, date, link, positions } = props;

  return (
    <CompanyContainer>
      {
        positions.map((position: any) => {
          return (
            <div>
              <h3>{position.name}</h3>
              <a href={link} target='_blank_'>
                {companyName}
                <OpenIcon />
              </a>
              <div>{date}</div>
              <ul>
                {
                  position.description.map((item: string) =>
                    <li>{item}</li>
                  )
                }
              </ul>
            </div>
          )
        })
      }
    </CompanyContainer>
  )
};

export default Company;