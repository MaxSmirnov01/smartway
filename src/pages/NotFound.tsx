import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ToMainButton = styled.button`
  cursor: pointer;
  background: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  padding: 5px 15px;
`;

const NotFound = () => (
  <Container>
    <Link to="/">
      <ToMainButton>На главную</ToMainButton>
    </Link>
  </Container>
);

export default NotFound;
