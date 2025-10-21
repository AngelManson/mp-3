import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: rgba(0, 180, 216, 0.86);
    width: 30%;
    display: flex;
    justify-content: center;
`;

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLi = styled.li`
    border: 5px solid #79d3e3;
    background-color: #79d3e3;
    padding: 2%; 
    margin: 4%; 
    width: 80%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skills`}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/leadership`}>Leadership</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}