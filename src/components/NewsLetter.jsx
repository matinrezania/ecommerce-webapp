import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #d7efff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px sold lightgray;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:active {
        background-color: #008080c2;
    }
`;

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>
                Get timely updates from our latest and hottest products.
            </Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <SendOutlinedIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;
