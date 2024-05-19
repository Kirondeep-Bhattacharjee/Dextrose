import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import vishvaryaLogoNoBg from "../assets/vishvaryaLogoNoBg.png"

const Container = styled.div`
    display: flex;
    background-color: #EADBC8;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 0;
    flex: 1;
    margin-right: 10px;
`; 
const BrandName = styled.h1`
    padding-top: 10px;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    letter-spacing: 2px;
    
`;
const Logo = styled.img`
    height: 60px;
    width: auto;
    align-items: center;
    justify-content: center;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 15px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment= styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <LogoContainer>
                    <Logo src= {vishvaryaLogoNoBg}/>
                    <BrandName>DEXTROSE.</ BrandName >
                </LogoContainer>
                
                <Desc>Discover the essence of wellness with Vishwarya. Our products are meticulously crafted with premium ingredients and advanced formulations, ensuring exceptional quality and effectiveness. Trust in Vishwarya to enhance your natural radiance and unleash your true potential.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="03C988">
                        <WhatsAppIcon />
                    </SocialIcon>
                    <SocialIcon color="1C82AD">
                        <TelegramIcon />
                    </SocialIcon>
                    
                    
                    <SocialIcon color="B9B4C7">
                        <ErrorOutlinedIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and conditions</ListItem>
                    <ListItem>About developer</ListItem>               
                </List>
            </Center>
            <Right>
                
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnIcon style={{marginRight: "10px"}} />  203 Geetanjali, 5th Cross St, Sai Baba Road, Bangalore
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{marginRight: "10px"}} />  +91 7005289296
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight: "10px"}} />  kiranbattacharji123@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;


