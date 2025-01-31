import styled from 'styled-components';
import Link from '@mui/material/Link';
import { KeyboardArrowDown, OpenInNew } from "@mui/icons-material"

const Container = styled.div`
    style: flex;
    flex-direction: column;
    background-color: rgb(238, 237, 237);
    // padding: 20px;
    text-align: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    width: 735px;
    height: 530px;

    opaque: 0.8;
    overflow: hidden;

    transition: height 0.3s ease;

    &:hover { 
        opaque: 1;
        height: 700px;
    }
`;

const ImageWrapper = styled.div`
    border-radius: 10px;
    background-color: blue;
    width: 735px;
    height: 420px;
    margin-bottom: 30px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    text-color: gray;
`;

const FooterItemWrapper = styled.div`
    display: flex;
    padding-left: 10px;
    flex-display: row;
    align-content: right;
    // overflow: hidden;
`;

const FooterDivider = styled.div`
    width: 100%;
    height: 2px;
    background-color:rgb(255, 255, 255);
`;

const ExternalLinkIcon = styled(Link)`
    color: black;
    &:hover {
        color:blue;
    }
`;

const DescriptionWrapper = styled.div`
    font-family: Arial;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
`;

const ProjectSnippet = ({ title, description, imgSource, link }) => {
  return (
    <>
        <Container>
            <ImageWrapper>
                <Image src={imgSource} />
            </ImageWrapper>
            <Footer>
                <FooterItemWrapper>
                    <h1>{title}</h1>
                </FooterItemWrapper>
                <FooterItemWrapper>
                    <ExternalLinkIcon href={link} target="_blank" rel="noopener" >
                        <OpenInNew style={{ width: '70px', height: '40px', }} />
                    </ExternalLinkIcon>
                    <KeyboardArrowDown style={{ width: '70px', height: '40px' }}/>
                </FooterItemWrapper>
            </Footer>

            <DescriptionWrapper>
                <br/>
                <br/>
                <p>{description}</p>
            </DescriptionWrapper>
        </Container>
    </>
  )
}

export default ProjectSnippet;
