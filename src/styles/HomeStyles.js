import { styled } from "styled-components";
import heroimage from '../assets/heroImage.jpg'
export const MainDiv = styled.div`
    margin-top: 85px;
`;

export const HeroImage = styled.div`
 border: solid red 1px;
 background-image: url(${heroimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
`;