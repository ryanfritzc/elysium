import { styled } from "styled-components";
import heroimage from '../assets/heroImage.jpg'
export const MainDiv = styled.div`
    
`;

export const HeroImage = styled.div`
    background-image: url(${heroimage});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
`;