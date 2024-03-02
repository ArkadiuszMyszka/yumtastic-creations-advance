import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { Container, Link, BgGraphics } from "./RegisterPage.styled";

export const RegisterPage = () => {
    return (<>
        <Container/> 
        <BgGraphics/>
        <AuthForm/>
        <Link to="/signin">Sign In</Link>
        </>
    );
};

export default RegisterPage;