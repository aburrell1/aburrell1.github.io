import React, { useState } from 'react';
import styled from 'styled-components';
import Link from '@mui/material/Link';
import { KeyboardArrowDown, OpenInNew } from "@mui/icons-material";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(238, 237, 237);
    text-align: center;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    width: 735px;
    height: ${({ isExpanded }) => (isExpanded ? '750px' : '530px')};
    overflow: hidden;
    transition: height 0.3s ease;
    position: relative;
`;

const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 735px;
    height: 420px;
    border-radius: 10px 10px 0 0;
    background-color: blue;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 450px; /* Adjusted to account for fixed ImageWrapper */
    padding: 10px 20px;
`;

const FooterItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ExternalLinkIcon = styled(Link)`
    color: black;
    &:hover {
        color: blue;
    }
`;

const ArrowIcon = styled(KeyboardArrowDown)`
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    border-radius: 50%; /* Makes the hover effect circular */
    &:hover {
        background-color: rgba(0, 0, 0, 0.1); /* Adds a dark circular hue */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
    }
`;

const DescriptionWrapper = styled.div`
    font-family: Arial;
    font-size: 20px;
    padding: 15px;
    display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
`;

const ExpandSection = styled.div`
    position: absolute;
    bottom: 2px;
    right: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: rgb(80, 80, 80);
    transition: color 0.3s ease;

    &:hover {
        color: rgb(0, 0, 0);
    }
`;

const FixedPadding = styled.div`
    height: 20px;
`;

// Styled Component for the Separator Bar
const SeparatorBar = styled.div`
    position: absolute;
    bottom: 23px;
  width: 100%;
  height: 1px; /* Thickness of the bar */
  background: linear-gradient(to right,rgb(170, 170, 170),rgb(141, 141, 141)); /* Gradient effect */
`;

const ProjectSnippet = ({ title, description, imgSource, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Container isExpanded={isExpanded}>
            <ImageWrapper>
                <Image src={imgSource} />
            </ImageWrapper>
            <Footer>
                <FooterItemWrapper>
                    <h1>{title}</h1>
                </FooterItemWrapper>
                <FooterItemWrapper>
                    <ExternalLinkIcon href={link} target="_blank" rel="noopener">
                        <OpenInNew style={{ width: '40px', height: '40px' }} />
                    </ExternalLinkIcon>
                </FooterItemWrapper>
            </Footer>
            <DescriptionWrapper isExpanded={isExpanded}>
                <p>{description}</p>
                <FixedPadding />
            </DescriptionWrapper>
            <SeparatorBar />
            <ExpandSection onClick={toggleExpand}>
                <span>{isExpanded ? "Collapse" : "Click for more info"}</span>
                <ArrowIcon isExpanded={isExpanded} />
            </ExpandSection>
        </Container>
    );
};

export default ProjectSnippet;