import styled from 'styled-components';
import { socials } from '../utils/data';

const Logo = ({ url, font }) => <Link href={url} target='_blank' className={font} />;

const Socials = () => {
  return (
    <Container>
      {socials.map((data, i) => (
        <Logo key={`socials-${data.title}`} {...data} />
      ))}
    </Container>
  );
};
export default Socials;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Link = styled.a`
  color: var(--color-primary-blue);
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: var(--color-primary-red);
  }
`;
