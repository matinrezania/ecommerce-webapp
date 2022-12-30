import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    margin: 0;
    font-weight: bold;
    display: inline;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    console.log(quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"></Input>
                        <SearchIcon
                            style={{ color: "gray", fontSize: "16px" }}
                        ></SearchIcon>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Logo>OSHA.</Logo>
                    </Link>
                </Center>
                <Right>
                    <Link
                        to="/auth/register"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <MenuItem> Register</MenuItem>
                    </Link>
                    <Link
                        to="/auth/login"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <MenuItem> Sign In</MenuItem>
                    </Link>
                    <Link
                        to="/cart"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
