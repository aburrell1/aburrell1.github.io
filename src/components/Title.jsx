import styled from 'styled-components';

const Container = styled.div`
    height: 80px;
    background-color: black;
    color: white;
    display: flex;
    align-text: center;
    padding: 20px;
    justify-content: center;
    font-size: 50px;
    font-weight: 500;
`

const Title = () => {
  return (
    <Container>
      PORTFOLIO
    </Container>
  )
}

export default Title;
