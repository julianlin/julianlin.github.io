import React, { FC, RefObject } from 'react';
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

  ul {
    padding: 0;
  }

  li {
    margin: ${p => p.theme.spacing[2]};
    margin-top: 0;

    a {
      align-items: center;
      border-radius: 4px;
      color: ${p => p.theme.colors.contrast};
      display: flex;
      font-weight: bold;
      justify-content: center;
      padding: ${p => p.theme.spacing[1]};
      text-decoration: none;
      width: ${p => p.theme.spacing[4]};

      &:active {
        border: 1px solid ${p => p.theme.colors.contrast};
      }

      &:hover {
        background-color: ${p => p.theme.colors.light};

        svg {
          fill: ${p => p.theme.colors.light};
        }
      }

      &:visited: {
        color: ${p => p.theme.colors.contrast};
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

const Links = [
  {
    'url': 'https://github.com/julianlin/julianlin.github.io/tree/dev',
    'text': 'Source'
  },
  {
    'url': 'https://github.com/julianlin',
    'text': 'GitHub'
  },
  {
    'url': 'https://www.linkedin.com/in/julianlin1/',
    'text': 'Linkedin'
  }
]

type LinksSectionType = {
  sectionRef: RefObject<HTMLElement>;
}

const LinksSection: FC<LinksSectionType> = props => {
  const { sectionRef } = props;

  return (
    <LinksSectionContainer ref={sectionRef}>
      <h2>Links</h2>
      <ul>
        {Links.map(link => (
          <li>
            <a href={link.url} target="_blank_">
              {link.text}
            </a>
          </li>
        ))
        }
      </ul>
    </LinksSectionContainer>
  )
};

export default LinksSection;