import Header from './Header'
import styled from 'styled-components';
import ProjectSnippet from './ProjectSnippet';

const Container = styled.div`
    width: 100%;
    height: 200vh;
    background-color:rgb(202, 243, 255);
    justify-content: center;
    align-items: center;

    opacity: 1;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    padding-left: 50px;
    width: 100%;
    justify-content: center;
    align-content: center;
    display: flex;
`;

const GridFrame = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 50px;
`;


const othelloProjectDescription = "description";
const twoDes = "description";

const Grid = () => {
    return (
        <GridFrame>
            {/* <ProjectSnippet 
                title="Heart Reconstruction w/ Deep Learning" 
                description={twoDes}
                imgSource="src/components/images/ceda.png"
                link="https://rednova25.github.io/fit_senior_project/" /> */}
            <ProjectSnippet 
                title="Othello Deep Learning Agent" 
                description={othelloProjectDescription} 
                imgSource="src/components/images/othelloboard.png"
                link="https://github.com/michaelnicol/CSE4301-Othello-AI" />    
            <ProjectSnippet 
                title="Hangman Deep RL Agent" 
                description={twoDes} 
                imgSource="src/components/images/hangman_background.png" 
                link="https://github.com/aburrell1/mth4320-hangman-ai" />    
            <ProjectSnippet 
                title="Example" 
                description={twoDes} />
        </GridFrame>
    );
};


const Projects = () => {
  const projectNames = ["Project A", "Project B", "Project C", "Project D", "E", "F"]

  return (
    <>
        <div id="projects-section">     
            <Container>
                <Header text="Projects" />
                <Wrapper>
                    <Grid gridItems={projectNames} />
                </Wrapper>
            </Container>
            
        </div>
    </>
  )
}

export default Projects
