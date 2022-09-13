import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 150px;
    height: 7%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>OSHA.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur suscipit, in nobis officia quas excepturi vitae
                    velit et maxime explicabo veniam at, libero repellendus
                    consequatur culpa error dolorem beatae. Laudantium?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="4a91fd">
                        <TelegramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE ">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: "10px" }} />
                    Paris, 107 Rue Caulaincourt
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} />
                    +33-755-553-923
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{ marginRight: "10px" }} />
                    contact@osha.com
                </ContactItem>
                <Payment src="images/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
