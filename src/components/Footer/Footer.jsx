import React, { useState } from 'react';
import { Subscribe } from '../../dummy components/Buttons/Buttons.styled';
import { SocialMediaWhite } from "../../dummy components/SocialMedia/SocialMedia";
import logo from "../../images/ui/logo.svg";
import input from "../../images/icons/input.svg";
import { 
    About,
    AboutBox, 
    AboutItem, 
    Box, 
    ErrorMsg,
    FooterBox, 
    FooterDiv,
    Form, 
    Info, 
    InfoTextBold, 
    Input, 
    InputBox,
    Logo, 
    LogoName,
    LogoSvg, 
    MailSvg,
    Nav, 
    NavItem, 
    Newsletter, 
    NewsletterTitle, 
    NewsletterTxt,
    StyledFooter } from './Footer.styled.jsx';



export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setIsValidEmail(isValid);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
    };
    return (
        <FooterBox>
            <StyledFooter>
                <FooterDiv>
                    <Box>
                        <AboutBox>
                            <Logo>
                                <a href="/main">
                                    <LogoSvg><use href={`${logo}#icon-logo`}></use></LogoSvg> 
                                </a>
                                <LogoName>So Yummy</LogoName>
                            </Logo>
                        <About>
                                <AboutItem>Database of recipes that can be replenished </AboutItem>
                                <AboutItem>Flexible search for desired and unwanted ingredients</AboutItem>
                                <AboutItem>Ability to add your own recipes with photos</AboutItem>
                                <AboutItem>Convenient and easy to use</AboutItem>
                        </About>
                        </AboutBox>
                        <Nav>
                            <NavItem href="/search">Ingredients</NavItem>
                            <NavItem href="/add">Add recipes</NavItem>
                            <NavItem href="/my">My recipes</NavItem>
                            <NavItem href="/favorite">Favorite</NavItem>
                            <NavItem href="/shopping-list">Shopping list</NavItem>
                        </Nav>
                    </Box>

                        <Newsletter>
                            <NewsletterTitle>Subscribe to our Newsletter</NewsletterTitle>
                            <NewsletterTxt>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</NewsletterTxt>
                            <Form onSubmit={handleSubmit}>
                                <InputBox className={`email_input_container ${!isValidEmail && email !== '' ? 'invalid' : ''}`}>
                                    <MailSvg><use href={`${input}#icon-input_mail`}></use></MailSvg>
                                    <Input
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </InputBox>
                                <Subscribe 
                                    type="submit" 
                                    disabled={!isValidEmail && email !== ''}>Subscribe</Subscribe>
                                {!isValidEmail && email !== '' && (
                                    <ErrorMsg>Your email is not valid</ErrorMsg>
                                )}
                            </Form>
                        </Newsletter>
                    </FooterDiv>
                    <SocialMediaWhite/>
            </StyledFooter>
            <Info>
                <InfoTextBold className='footer_bottom_first_element'>© 2023 All Rights Reserved.</InfoTextBold>
                <span>Terms of Service</span>
            </Info>
        </FooterBox>
    )
};