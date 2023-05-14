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
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Attribution = styled.div`
  color: var(--color-neutral-blackblue);
  font-weight: 400;

  a {
    color: var(--color-primary-blue);
    text-decoration: none;

    &:hover {}

    &:visited {}
  }
`;
