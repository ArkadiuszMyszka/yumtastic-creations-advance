import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import input from "../../images/icons/input.svg";
import privateApi from "../../services/PrivateApi";
import {
  Button,
  ErrorIconStyled,
  ErrorMessageStyled,
  Header,
  Form,
  Icon,
  InputBox,
  Input,
  OkIconStyled,
  PasswordStrength,
  WarnIconStyled,
} from "./AuthForm.styled";


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const checkPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  switch (strength) {
    case 0:
      return "Very Weak";
    case 1:
      return "Weak";
    case 2:
      return "Medium";
    case 3:
      return "Strong";
    case 4:
      return "Very Strong";
    default:
      return "Very Weak";
  }
};

const getPasswordIcon = (strength) => {
  switch (strength) {
    case "Very Weak":
      return <ErrorIconStyled />;
    case "Weak":
      return <WarnIconStyled />;
    case "Strong":
    case "Very Strong":
      return <OkIconStyled />;
    default:
      return null;
  }
};

export const AuthForm = () => {
  const [passwordStrength, setPasswordStrength] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsEmailValid(isValid);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
        privateApi
          .post("/register", values)
          .then((response) => {
            console.log("Registration successful", response);
            if (response.data.token) {
              localStorage.setItem("authToken", response.data.token);
            }
            setTimeout(() => {
              window.location.href = "/main";
            }, 500);
            setSubmitting(false);
            resetForm();
          })
          .catch((error) => {
            console.error("Registration error", error);
            setErrors({ submit: "Registration failed. Please try again." });
            setSubmitting(false);
          });
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Header>Registration</Header>
          <InputBox>
            <Icon>
              <use href={`${input}#icon-input_user`}></use>
            </Icon>
            <Field name="name" as={Input} placeholder="Name"/>
            <ErrorMessage name="name" component={ErrorMessageStyled} />
          </InputBox>
          
          <InputBox>
            <Icon>
              <use href={`${input}#icon-input_mail`}></use>
            </Icon>
            <Field
              name="email"
              as={Input}
              placeholder="Email"
              onChange={(e) => {
                const value = e.target.value;
                formik.setFieldValue("email", value);
                validateEmail(value);
              }}
            />
            {formik.errors.email && formik.touched.email ? (
              <ErrorIconStyled />
            ) : isEmailValid ? (
              <OkIconStyled />
            ) : null}
            <ErrorMessage name="email" component={ErrorMessageStyled}/>
          </InputBox>
          
          <InputBox>
            <Icon strength={passwordStrength}>
              <use href={`${input}#icon-input_lock`}></use>
            </Icon>
            <Field
              name="password"
              as={Input}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);
                formik.setFieldValue("password", value);
                setPasswordStrength(checkPasswordStrength(value));
              }}
              strength={passwordStrength}
            />
            {getPasswordIcon(passwordStrength)}
            <ErrorMessage name="password" component={ErrorMessageStyled} />
            <PasswordStrength strength={passwordStrength}>
              {passwordStrength && `Password strength: ${passwordStrength}`}
            </PasswordStrength>
          </InputBox>
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};