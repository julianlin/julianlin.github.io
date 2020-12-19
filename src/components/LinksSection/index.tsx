import React from 'react';
import styled from 'styled-components';

const LinksSectionContainer = styled.section`
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.contrast};
  display: flex;
  flex-direction: column;
  width: 100%;
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