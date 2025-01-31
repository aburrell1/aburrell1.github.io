import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    width: 100%;
    color: black;
    padding: 80px 40px;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    font-weight: 1000;
    // font-family: Helvetica;
`;

const Header = ({ text }) => {
  return (
    <div>
      <Container>
            {text}
      </Container>
    </div>
  )
}

export default Header;
