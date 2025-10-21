import styled from "styled-components";

const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
    font-size: calc(2px + 1vw);
`;

const StyledHeading = styled.h2`
    margin: 2%;
    text-align: center;
`;

const StyledSubHeading = styled.h4`
    margin: 1%;
    text-align: left;
`;

const StyledUL = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
    width: 100%;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
`;

const StyledLi = styled.li`
    width: 90%;
    margin: 2.5%;
    padding: 2%;
    border-left: 5px solid #79d3e3;
`;

export default function Edu (){
    return (
        <StyledMain>
            <title>Education|Resume</title>
            <StyledHeading>Education</StyledHeading>
            <StyledUL>
                <StyledLi>
                    B.A. in Computer Science, Minor in Business | Boston University, MA
                    <br/> May 2026
                </StyledLi>
                <StyledLi>
                    High School Diploma | Sayreville War Memorial High School, NJ
                    <br/> June 2022
                </StyledLi>
            </StyledUL>
            <StyledSubHeading>Relevant Coursework</StyledSubHeading>
            <StyledUL>
                <StyledLi>Database Systems</StyledLi>
                <StyledLi>Algorithms</StyledLi>
                <StyledLi>Software Engineering</StyledLi>
                <StyledLi>Computer Systems</StyledLi>
                <StyledLi>Linear Algebra</StyledLi>
                <StyledLi>Data Structures</StyledLi>
                <StyledLi>Discrete Math</StyledLi>
            </StyledUL>
        </StyledMain>
    )
}