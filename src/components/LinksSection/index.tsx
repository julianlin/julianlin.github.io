import React from 'react';
import styled from 'styled-components';

const LinksSectionContainer = styled.section`
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.contrast};
  display: flex;
  flex-direction: column;
  padding-bottom: ${p => p.theme.spacing[4]};
  padding-top: ${p => p.theme.spacing[4]};
  width: 100%;

  li {
    margin-bottom: ${p => p.theme.spacing[2]};
  }
`;

const LinksSection = (props: any) => {
  const { sectionRef } = props;

  return (
    <LinksSectionContainer ref={sectionRef}>
      <h2>Links</h2>
      <ul>
        <li>Link to something</li>
        <li>Link to something</li>
        <li>Link to something</li>
      </ul>
    </LinksSectionContainer>
  )
};

export default LinksSection;