import styled from 'styled-components';

import Socials from './Socials';
import { footer } from '../utils/data';

export default function Footer() {
  const { url, name, challenge } = footer;

  return (
    <Container>
      <Socials />
      <Attribution>
        Challenge by{' '}
        <a href={challenge} target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href={url}>{name}</a>.
      </Attribution>
    </Container>
  );
}

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Attribution = styled.div`
  color: var(--color-primary-blue);
  font-weight: 400;
  font-size: 0.75rem;
  opacity: 0.5;

  a {
    color: var(--color-primary-red);
    text-decoration: none;

    &:hover {
      opacity: 0.75;
    }

    &:visited {
      /* color: var(--color-neutral-blue); */
    }
  }
`;
