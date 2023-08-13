import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavMainDiv = styled.div`
    background-color: #e1a679;
    position: fixed;
    top: 0px;
    width: 80%;
    left: 50%;
    margin-left: -40%;
    border: solid 1px #a9a9b7;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Navlink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 32px;
`;

export const FooterMainDiv = styled.div`
    
`;