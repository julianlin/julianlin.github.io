import React from 'react';
import styled from 'styled-components';

const CompanyContainer = styled.div`
  div {
    margin-bottom: ${p => p.theme.spacing[1]};
  }
`;

const Company = () => {
  return (
    <CompanyContainer>
      <h3>Position</h3>
      <div>Company</div>
      <div>Jan 2020 - Dec 2020</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </CompanyContainer>
  )
};

export default Company;