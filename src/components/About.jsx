import Header from './Header';
import styled from 'styled-components';

const Container = styled.div`
    height: 600px;
    width: 100%;
    background-color: white;

    opacity: 0.5;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding: 50px 50px;
    align-items: center;
    color:rgb(235, 235, 235);
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    padding-top: 15px;
    max-height: 50px;
    padding: 20px 20px;
    
`;

const Right = styled.div`
    flex: 1;
    padding-top: 15px;
    max-height: 50px;
    padding: 20px 20px;
    color: black:
`;

const AboutParagraph = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 20px;
    max-height: 200px;
    color:rgb(110, 110, 110);
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Image = styled.img`
    max-height: 200px;
    max-width: 200px;
`;

const About = () => {
  return (
    <div id="about-section">
        <Container>
            <Header text="About"/>
            <Wrapper>
                <Left>
                    <AboutParagraph>
                        <p>Hi, I&apos;m Asher. I&apos;m a motivated Computer Science student transitioning from Cybersecurity to Software Engineering and AI development, with experience in scripting and automation at Visa Inc. and L3Harris Inc. Currently interested in learning about production machine learning, developing with large language models (LLMs), and data processing techniques. Eager to leverage programming skills to contribute to innovative software engineering projects.</p>
                    </AboutParagraph>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image src="src\components\images\PortraitWhiteBackground_Small.jpg"></Image>
                    </ImageContainer>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default About;
