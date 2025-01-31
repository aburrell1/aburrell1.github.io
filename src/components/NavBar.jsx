import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.div`
    height: 60px;
    background-color: black;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
`;

const Left = styled.div`
    flex: 1;
    text-align: center;
    padding-top: 15px;
    color: white;
    cursor: pointer;

    font-size: 1rem;
    transition: font-size 0.3s ease;
    &:hover { 
        font-size: 1.2rem;
        background-color: grey; 
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    padding-top: 15px;
    color: white;
    &:hover { 
        background-color: grey; 
    }
`;

const Right = styled.div`
    flex: 1;
    align-items: center;
    padding-top: 15px;
    text-align: center;
    color: white; 
    &:hover { 
        background-color: grey; 
    }
`;

const End = styled.div`
    flex: 1;
    align-items: center;
    padding-top: 15px;
    text-align: center;
    color: white; 
    &:hover { 
        background-color: grey; 
    }
`;

const MenuItem = styled.div`
    font-size: 50px;
    cursor: pointer;
    height: 60px;

    font-size: 1.2rem;
    transition: font-size 0.3s ease;
    &:hover { 
        font-size: 1.5rem;
    }
    
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <MenuItem>
                    <Link to="home-section" smooth={true} duration={500}>
                        Home
                    </Link>
                </MenuItem>
            </Left>
            <Center>
                <MenuItem>
                    <Link to="about-section" smooth={true} duration={500}>
                        About
                    </Link>
                </MenuItem>
            </Center>
            <Right>
                <MenuItem>
                    <Link to="projects-section" smooth={true} duration={500}>
                        Projects
                    </Link>
                </MenuItem>
            </Right>
            <End>
                <MenuItem>
                    <Link to="contacts-section" smooth={true} duration={500}>
                        Contact Me
                    </Link>
                </MenuItem>
            </End>
        </Wrapper>
    </Container>
  );
}

export default NavBar;
