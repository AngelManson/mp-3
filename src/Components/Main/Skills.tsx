import styled from "styled-components";

const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
    font-size: calc(2px + 0.85vw);
    @media screen and (max-width: 1000px){
        height: 100vh;
        width: 100%;
        font-size: calc(2px + 2vw);
    }
`;

const StyledHeading = styled.h2`
    margin: 2%;
    text-align: center;
`;

const StyledSubHeading = styled.h3`
    margin: 1%;
    color: rgba(5, 46, 62, 0.86);
`;

const StyledUL = styled.ul`
    padding-left: 0;
    list-style: none;
    width: 100%;
    margin: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLi = styled.li`
    width: 70%;
    background-color: rgba(121, 211, 227, 0.6);
    padding: .60%;
    margin: 0.75%;
    border-radius: 15px; 
    text-align: center;
    @media screen and (max-width: 1000px){
        font-size: calc(2px + 1.15vw);;
    }
    @media screen and (max-width: 750px){
        font-size: calc(2px + 2vw);
    }
`;

export default function Skills() {
    return (
        <StyledMain>
            <title>Skills|Resume</title>
            <StyledHeading>Technical Skills</StyledHeading>
            <StyledSubHeading>Programming Languages</StyledSubHeading>
            <StyledUL>
                <StyledLi>JavaScript (In-Progress)</StyledLi>
                <StyledLi>CSS (In-Progress)</StyledLi>
                <StyledLi>HTML</StyledLi>
                <StyledLi>OCaml</StyledLi>
                <StyledLi>SQL</StyledLi>
                <StyledLi>XML</StyledLi>
                <StyledLi>MongoDB</StyledLi>
                <StyledLi>Java</StyledLi>
                <StyledLi>Python</StyledLi>
                <StyledLi>Assembly Language</StyledLi>
            </StyledUL>
            <StyledSubHeading>Software</StyledSubHeading>
            <StyledUL>
                <StyledLi>Visual Studio Code</StyledLi>
                <StyledLi>Spyder</StyledLi>
                <StyledLi>Emacs</StyledLi>
                <StyledLi>WebStorm</StyledLi>
                <StyledLi>IntelliJ</StyledLi>
                <StyledLi>Postman</StyledLi>
                <StyledLi>Apache Cassandra</StyledLi>
            </StyledUL>
        </StyledMain>
    )
}