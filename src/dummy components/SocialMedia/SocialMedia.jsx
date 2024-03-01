import React from "react";
import social_media from "../../images/icons/social_media.svg";
import { SocialMediaBox, SvgB, SvgW } from "./SocialMedia.styled";

// white hover & focus
export const SocialMediaWhite = () => {
    return <SocialMediaBox>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <SvgW><use href={`${social_media}#icon-facebook`}></use></SvgW>
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <SvgW><use href={`${social_media}#icon-youtube`}></use></SvgW>
    </a>
    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <SvgW><use href={`${social_media}#icon-twitter`}></use></SvgW>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <SvgW><use href={`${social_media}#icon-instagram`}></use></SvgW>
    </a>
</SocialMediaBox>;
};

// black hover & focus
export const SocialMediaBlack = () => {
    return <SocialMediaBox>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <SvgB><use href={`${social_media}#icon-facebook`}></use></SvgB>
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <SvgB><use href={`${social_media}#icon-youtube`}></use></SvgB>
    </a>
    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <SvgB><use href={`${social_media}#icon-twitter`}></use></SvgB>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <SvgB><use href={`${social_media}#icon-instagram`}></use></SvgB>
    </a>
</SocialMediaBox>;
};