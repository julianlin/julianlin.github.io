import React, { FC } from 'react';

import {ReactComponent as OpenIcon}
  from '../../assets/open-icon.svg';

import { CompanyContainer } from './styles';


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