import styled from 'styled-components';
import { socials } from '../utils/data';

const Logo = ({ title, url, logo }) => (
  <ListItem>
    <a href={url} target='_blank'>
      <img src={logo} alt={`logo-${title}`} />
    </a>
  </ListItem>
);

const Socials = () => {
  return (
    <Container>
      <List>
        {socials.map((data, i) => (
          <Logo key={`socials-${i}`} {...data} />
        ))}
      </List>
    </Container>
  );
};
export default Socials;

const Container = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;
