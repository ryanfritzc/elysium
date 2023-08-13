import * as S from "../styles/ComponentStyles";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <S.NavMainDiv>
            <S.Navlink to="/">Elysium</S.Navlink>
        </S.NavMainDiv>
    );
}

export default Navbar;