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

const LinksSection: FC<LinksSectionType> = (props) => {
  const { sectionRef } = props;

  return (
    <LinksSectionContainer ref={sectionRef}>
      <h2>Links</h2>
      <ul>
        {Links.map((link) => (
          <li>
            <a href={link.url} target="_blank_">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </LinksSectionContainer>
  );
};

export default LinksSection;
