import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 85px);
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.button`
    width: 50px;
    height: 50px;
    background-color: #ececec;
    border-radius: 50px;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
    //
    width: 100%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Info = styled.div`
    margin: 0 50px;
`;

const Title = styled.h1`
    font-style: 70px;
`;

const Desc = styled.p`
    margin: 50px 0;
    font-style: 20px;
    font-weight: 500;
    letter-spacing: 1.5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(
                slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1
            );
        } else {
            setSlideIndex(
                slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
            );
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.image} />
                        </ImageContainer>
                        <InfoContainer>
                            <Info>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOW NOW</Button>
                            </Info>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRight />
            </Arrow>
        </Container>
    );
};

export default Slider;
