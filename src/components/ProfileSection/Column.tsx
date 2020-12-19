import React, { FC } from 'react';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 800px;
  padding: ${p => p.theme.spacing[3]};

  h3 {
    ${p => p.theme.colors.primary};
  }

  svg {
    fill: ${p => p.theme.colors.primary};
    height: ${p => p.theme.spacing[4]};
    width: ${p => p.theme.spacing[4]};
  }

  @media only screen and (${p => p.theme.breakpoints.medium}) {
    flex-direction: row;
    height: 100%;
    margin: 0;
  }
`;

type ColumnType = {
  icon: any;
  title: string;
}

const Column: FC<ColumnType> = props => {
  const { icon, title } = props;

  return (
    <ColumnContainer>
      {icon}
      <h3>{title}</h3>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </ColumnContainer>
  )
};

export default Column;