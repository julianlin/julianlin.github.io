import { Typography } from '@mui/material';
import { FC, RefObject } from 'react';
import { LinksSectionContainer } from './styles';

const Links = [
  {
    url: 'https://github.com/julianlin/julianlin.github.io/tree/dev',
    text: 'Source',
  },
  {
    url: 'https://github.com/julianlin',
    text: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/julianlin1/',
    text: 'Linkedin',
  },
];

type LinksSectionType = {
  sectionRef: RefObject<HTMLElement>;
};

export const LinksSection: FC<LinksSectionType> = ({ sectionRef }) => {
  return (
    <LinksSectionContainer ref={sectionRef}>
      <Typography component='h2' variant='h4'>
        Links
      </Typography>
      <ul>
        {Links.map((link) => (
          <li>
            <a href={link.url} target='_blank_'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </LinksSectionContainer>
  );
};
