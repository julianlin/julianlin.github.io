import React from 'react';
import styled from 'styled-components';

const LinksSectionContainer = styled.section`
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.contrast};
  display: flex;
  flex-direction: column;
  padding-bottom: ${p => p.theme.spacing[2]};
  padding-top: ${p => p.theme.spacing[2]};
  width: 100%;

  li {
    margin: ${p => p.theme.spacing[2]};
    margin-top: 0;

    a {
      align-items: center;
      color: ${p => p.theme.colors.contrast};
      display: flex;
      text-decoration: none;

      &:visited: {
        color: ${p => p.theme.colors.contrast};
      }

      &:hover {
        color: ${p => p.theme.colors.light};

        svg {
          fill: ${p => p.theme.colors.light};
        }
      }
    }
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    li {
      display: inline;
      float: left;
    }
  }
`;

const LinksSection = (props: any) => {
  const { sectionRef } = props;

  return (
    <LinksSectionContainer ref={sectionRef}>
      <h2>Links</h2>
      <ul>
        <li>
          <a href='https://github.com/julianlin/julianlin.github.io/tree/dev' target='_blank_'>
            Source Code
          </a>
        </li>
        <li>
          <a href='https://github.com/julianlin' target='_blank_'>
            GitHub
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/julianlin1/' target='_blank_'>
            Linkedin
          </a>
        </li>
      </ul>
    </LinksSectionContainer>
  )
};

export default LinksSection;