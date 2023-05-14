import styled from 'styled-components';
import { socials } from '../utils/data';

const Logo = ({ title, url, logo }) => (
  <Wrapper>
    <a href={url} target='_blank'>
      <img src={logo} alt={`logo-${title}`} />
    </a>
  </Wrapper>
);

const Socials = () => {
  return (
    <Container>
      {socials.map((data, i) => (
        <Logo key={`socials-${i}`} {...data} />
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

const Wrapper = styled.div``;
