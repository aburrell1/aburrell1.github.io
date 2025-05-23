import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:rgb(228, 228, 228);
    position: relative;
`;

const TitleImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
        flex: 1;
`;

const Image = styled.img`
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Slider = () => {
  return (
    <div id="home-section">
        <Container>
            <TitleImage src="src/components/images/title.jpg"/>
            {/* <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow> */}
            <Wrapper>
                {/* <ImageContainer>
                    <Image src="https://i.bb.co/XsdmR@c/1.png" />
                </ImageContainer> */}
                <InfoContainer></InfoContainer>
            </Wrapper>
            {/* <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow> */}
        </Container>
    </div>
  )
}

export default Slider
