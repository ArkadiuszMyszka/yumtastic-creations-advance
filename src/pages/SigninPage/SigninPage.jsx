import React from "react";
import { BgGraphics, Container, Link } from "../RegisterPage/RegisterPage.styled.jsx";
import { LoginForm } from "../../components/LoginForm/LoginForm.jsx"

export const SigninPage = () => {
    return (<>
        <Container/> 
        <BgGraphics/>
        <LoginForm/>
        <Link to="/register">Registration</Link>
        </>);
};

export default SigninPage;