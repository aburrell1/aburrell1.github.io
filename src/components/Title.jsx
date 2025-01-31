import styled from 'styled-components';

const Container = styled.div`
    height: 100px;
    background-color: black;
    color: white;
    display: flex;
    align-text: center;
    padding: 20px;
    justify-content: center;
    font-size: 70px;
    font-weight: 500;
`

const Title = () => {
  return (
    <Container>
      ASHER BURRELL'S PORTFOLIO
    </Container>
  )
}

export default Title;
