import Header from './Header'
import styled from 'styled-components';
import ProjectSnippet from './ProjectSnippet';

const Container = styled.div`
    width: 100%;
    height: 170vh;
    background-color:rgb(202, 243, 255);
    justify-content: center;
    align-items: center;

    opacity: 1;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    background-image: 
        linear-gradient(45deg, rgba(173, 216, 230, 0.5) 25%, transparent 25%, transparent 75%, rgba(173, 216, 230, 0.5) 75%),
        linear-gradient(-45deg, rgba(135, 206, 250, 0.5) 25%, transparent 25%, transparent 75%, rgba(135, 206, 250, 0.5) 75%);

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


const othelloProjectDescription = `
    In the Fall of 2024, I developed several AI models that can play 
    Reversi using Python and scikit-learn. The first model uses traditional AI algorithms such as 
    Minimax and 
    combines them with various heuristics to make decisions. The 
    second model uses basic reinforcement learning (Q-Learning) to improve its 
    gameplay over time and wins 90% of the time against the 
    traditional models.
`;

const hangmanDescription = `
    In the Spring of 2024, I developed a PyTorch deep-learning RNN model that can play single-word Hangman. 
    I was able to fine-tune the model 
    until it could guess partially blanked words with 96% accuracy.
`;

const emailProjDescription = `
    I collaborated with a startup to develop the backend for a Gmail Plugin to evaluate 
        the likelihood of an email being a phishing attempt.
    I fine-tuned an XGBoost ML model to evaluate examples of 
        suspicious emails with 92% accuracy.
    Finally, I coordinated smooth message delivery and server 
        communication using ZeroMQ.
`;

const twoDes = `
    Since August 2024, I have been participating on a team of 3 students to develop a
    PyTorch ML model that reconstructs 3D images of human hearts from SPECT data.
    I designed custom loss functions and expanded the model architecture, thus reducing reconstruction error by 60%.
    I also leveraged Florida Tech's internal cloud service to perform distributed training, GPU acceleration and store data.
`;

const Grid = () => {
    return (
        <GridFrame>
            <ProjectSnippet 
                title="Heart Reconstruction w/ Deep Learning" 
                description={twoDes}
                imgSource="/images/ceda.png"
                link="https://rednova25.github.io/fit_senior_project/" /> 
            <ProjectSnippet 
                title="Othello Deep Learning Agent" 
                description={othelloProjectDescription} 
                imgSource="/images/othello.png"
                link="https://github.com/aburrell1/othello-ml-fullstack" />    
            <ProjectSnippet 
                title="Hangman Deep RL Agent" 
                description={hangmanDescription} 
                imgSource="/images/hangman_background.png" 
                link="https://github.com/aburrell1/mth4320-hangman-ai" />    
            <ProjectSnippet 
                title="Phishing Email Evaluation" 
                description={emailProjDescription}
                imgSource="/images/email-example.webp"
                 />
        </GridFrame>
    );
};


const Projects = () => {
  return (
    <>
        <div id="projects-section">     
            <Container>
                <Header text="Projects" />
                <Wrapper>
                    <Grid  />
                </Wrapper>
            </Container>
            
        </div>
    </>
  )
}

export default Projects
