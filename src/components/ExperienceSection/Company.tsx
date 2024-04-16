import { OpenInNew } from '@mui/icons-material';
import { FC } from 'react';
import { CompanyContainer } from './styles';
import { Position } from './types';

type CompanyProps = {
  companyName: string;
  startDate: string;
  endDate: string;
  link: string;
  positions: Position[];
};

export const Company: FC<CompanyProps> = ({
  companyName,
  startDate,
  endDate,
  link,
  positions,
}) => {
  return (
    <CompanyContainer>
      {positions.map((position: Position) => {
        return (
          <div>
            <h3>{position.name}</h3>
            <a href={link} target="_blank_">
              {companyName}
              <OpenInNew />
            </a>
            <div>
              {startDate} - {endDate}
            </div>
            <ul>
              {position.description.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </CompanyContainer>
  );
};
