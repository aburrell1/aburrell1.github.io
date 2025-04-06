import Header from './Header';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: white;
    padding: 50px 20px;
    box-sizing: border-box;
    background-image: 
        linear-gradient(45deg, rgba(233, 233, 233, 0.5) 25%, transparent 25%, transparent 75%, rgba(155, 155, 155, 0.5) 75%),
        linear-gradient(-45deg, rgba(238, 238, 238, 0.5) 25%, transparent 25%, transparent 75%, rgba(214, 214, 214, 0.5) 75%),
        linear-gradient(45deg, rgba(0, 0, 0, 0.1) 50%, transparent 50%), 
        linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 50%, transparent 50%);
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: stretch; /* Ensures both Left and Right containers stretch to the same height */
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;

const Left = styled.div`
    flex: 1;
    min-width: 300px;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
    min-width: 300px;
    padding: 20px;
    display: flex;
    align-items: stretch; /* Ensures the ImageContainer stretches to match the height of Left */
`;

const AboutParagraph = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: left;
    font-size: 18px;
    line-height: 1.6;
    color: rgb(80, 80, 80);
`;

const SubSection = styled.div`
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(245, 245, 245);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SubSectionHeader = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: rgb(50, 50, 50);
`;

const ClassUl = styled.ul`
    color: rgb(50, 50, 50);
    padding-left: 20px;
    list-style-type: disc;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
    font-size: 16px;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
        background-color: rgb(255, 252, 74);
        color: black;
        padding: 5px;
        border-radius: 5px;
    }
`;

const ImageContainer = styled.div`
    flex: 1; /* Ensures the ImageContainer stretches to fill the height of Right */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    height: 100%; /* Stretches the image to fill the height of the container */
    max-width: 100%; /* Maintains aspect ratio */
    border-radius: 10px;
    object-fit: cover; /* Ensures the image covers the container without distortion */
`;

const About = () => {
    return (
        <div id="about-section">
            <Container>
                <Header text="About" />
                <Wrapper>
                    <Left>
                        <AboutParagraph>
                            <SubSection>
                                <SubSectionHeader>Overview</SubSectionHeader>
                                <p>
                                    Hi, I&apos;m Asher. I&apos;m a motivated Computer Science student transitioning from Cybersecurity to Software Engineering 
                                    and AI development, with experience in software development, scripting, and automation 
                                    at Visa Inc. and L3Harris Inc. Currently interested in learning about 
                                    production machine learning, developing with large language models
                                    (LLMs), and data processing techniques. Eager to leverage 
                                    programming skills to contribute to innovative software 
                                    engineering projects.
                                </p>
                            </SubSection>
                            <SubSection>
                                <SubSectionHeader>Education</SubSectionHeader>
                                <p>
                                    I am currently a senior undergraduate student at the Florida Institute of Technology in Melbourne, FL. I am 
                                    pursuing a bachelor&apos;s degree in Computer Science.
                                </p>
                                <p>Some of the most important classes I have taken include:</p>
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
                            <Image src="/images/background_tree.jpg" alt="Background Tree" />
                        </ImageContainer>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    );
};

export default About;