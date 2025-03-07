import Header from './Header';
import styled from 'styled-components';

const Container = styled.div`
    height: 1200px;
    width: 100%;
    background-color: white;

    opacity: 1;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    background-image: 
        linear-gradient(45deg, rgba(233, 233, 233, 0.5) 25%, transparent 25%, transparent 75%, rgba(155, 155, 155, 0.5) 75%),
        linear-gradient(-45deg, rgba(238, 238, 238, 0.5) 25%, transparent 25%, transparent 75%, rgba(214, 214, 214, 0.5) 75%),
        linear-gradient(45deg, rgba(0, 0, 0, 0.1) 50%, transparent 50%), 
        linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 50%, transparent 50%);
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
    text-align: left;
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
    max-height: 800px;
    max-width: 800px;
    border-radius: 10px;
`;

const SubSection = styled.div`
    margin: 20px;
    padding: 20px;
    border-radius: 5%;
    background-color:rgb(36, 36, 36);
    color: white;
    font-weight: 100px;
`;

const ClassUl = styled.ul`
    color: gold;
`;

const ListItem = styled.li`
    &:hover {
        background-color:rgb(255, 252, 74);
        color: black;
    }
`;

const About = () => {
  return (
    <div id="about-section">
        <Container>
            <Header text="About"/>
            <Wrapper>
                <Left>
                    <AboutParagraph>
                        <SubSection>
                            <h2>Overview</h2>
                            <br/>
                            <br/>
                            <p>Hi, I&apos;m Asher. I&apos;m a motivated Computer Science student transitioning from Cybersecurity to Software Engineering 
                                and AI development, with experience in software development, scripting, and automation 
                                at Visa Inc. and L3Harris Inc. Currently interested in learning about 
                                production machine learning, developing with large language models
                                (LLMs), and data processing techniques. Eager to leverage 
                                programming skills to contribute to innovative software 
                                engineering projects.</p>
                                
                            <br/>
                            <br/>
                        </SubSection>
                        <SubSection>
                            <h2>Education</h2>
                            <br/>
                            <br/>
                            <p>I am currently a senior undergraduate student at the Florida Institute of Technology in Melbourne, FL. I am 
                                pursuing a bachelor&apos;s degree in Computer Science.
                            </p> 
                            <br/>
                            <p>Some of the most important classes I have taken include:
                            </p>
                            <br />
                            <ClassUl>
                                <ListItem>Introduction to Software Engineering</ListItem>
                                <ListItem>Operating Systems</ListItem>
                                <ListItem>Computer Networks</ListItem>
                                <ListItem>Introduction to Artificial Intelligence</ListItem>
                                <ListItem>Deep Learning</ListItem>
                                <ListItem>Data Structures and Algorithms</ListItem>
                                <ListItem>Probability and Statistics</ListItem>
                                <ListItem>Introduction to Linear Algebra</ListItem>
                                <ListItem>Introduction to Cyber Operations</ListItem>
                            </ClassUl>
                            </SubSection>


                    </AboutParagraph>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image src="/images/background_tree.jpg"></Image>
                    </ImageContainer>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default About;
