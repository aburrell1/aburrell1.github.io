import React from 'react'
import styled from 'styled-components'
import { GitHub, LinkedIn, Mail } from "@mui/icons-material"
import { Link } from '@mui/material';

const ContactMe = styled.div`
    height: 60px;
    background-color:rgb(53, 53, 53);
    color: white;
    display: flex;
    align-text: center;
    padding: 50px;
    justify-content: center;
    font-size: 40px;
    font-weight: 500;
`

const Container = styled.div`
    height: 150px;
    background-color: rgb(53, 53, 53);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    text-align: center;
    padding-top: 15px;
    color: white;
    cursor: pointer; 
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    padding-top: 15px;
    color: white;
`;

const Right = styled.div`
    flex: 1;
    align-items: center;
    padding-top: 15px;
    text-align: center;
    color: white; 
`;

const ContactItem = styled.div`
    font-size: 30px;
    cursor: pointer;
    height: 60px;
    display: flex;

    color: white;

    align-items: center;
    justify-content: center;

    // font-size: 1.2rem;
    // transition: font-size 0.3s ease;
    // &:hover { 
    //     background-color: white;
    //     color: black;
    // }
`;

const ItemWrapper = styled(Link)`
    display: flex;
    padding: 30px;
    cursor: pointer;
    color: white;

    &:hover { 
        background-color: white;
        color: black;
    }
`;

const ContactItemLabel = styled.div`
    size: 40px;
`;

const ContactSection = () => {
  return (
    <>
        <div id="contacts-section">
        <ContactMe>
            CONTACT ME
        </ContactMe>
        <Container>
                <Wrapper>
                    <Left>
                        <ContactItem>
                            <ItemWrapper href="mailto:aburrell758@gmail.com?subject=Subject&body=Body" target="_blank" rel="noopener">
                                <ContactItemLabel>
                                    GMAIL: 
                                </ContactItemLabel>
                                <Mail style={{ width: '70px', height: '40px' }} />
                            </ItemWrapper>
                        </ContactItem>
                    </Left>
                    <Center>
                        <ContactItem>
                            <ItemWrapper href="https://www.linkedin.com/in/asher-burrell/" target="_blank" rel="noopener">
                                <ContactItemLabel>
                                    LINKEDIN: 
                                </ContactItemLabel>
                                <LinkedIn style={{ width: '70px', height: '40px' }}/>
                            </ItemWrapper>
                        </ContactItem>
                    </Center>
                    <Right>
                        <ContactItem>
                            <ItemWrapper href="https://github.com/aburrell1" target="_blank" rel="noopener">
                                <ContactItemLabel>
                                    GITHUB: 
                                </ContactItemLabel>
                                <GitHub style={{ width: '70px', height: '40px' }}/>
                            </ItemWrapper>
                        </ContactItem>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    </>
  )
}

export default ContactSection;
