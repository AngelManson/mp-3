import styled from "styled-components";
import Calculator from "./Calculator.tsx";

const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
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

const StyledSubHeading = styled.h4`
    margin: 2%;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
`;

const StyledUL = styled.ul`
    padding-left: 0;
    list-style: none;
    width: 100%;
    margin: 2%;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
`;

const StyledLi = styled.li`
    width: 90%;
    padding-left: 1%;
    margin-bottom: 2%;
    border-left: 2px solid #79d3e3;
`;

export default function Projects() {
    return (
        <StyledMain>
            <title>Projects|Resume</title>
            <StyledHeading>Projects</StyledHeading>
            <StyledSubHeading>Calculator (Assembly, C)</StyledSubHeading>
            <StyledUL>
                <StyledLi>
                    Collaborated with a classmate to develop a program in Assembly
                    that takes in data and performs several bitwise calculator commands
                </StyledLi>
                <StyledLi>
                    Successfully translated the Assembly program into C to enhance functionality and usability
                </StyledLi>
            </StyledUL>
            <StyledSubHeading>Sudoku (Java)</StyledSubHeading>
            <StyledUL>
                <StyledLi>
                    Implemented a class representing a Sudoku puzzle using a 2D array
                </StyledLi>
                <StyledLi>
                    Developed a recursive backtracking algorithm to solve Sudoku puzzles efficiently
                </StyledLi>
            </StyledUL>
            <StyledSubHeading>Industry Analysis Team Project</StyledSubHeading>
            <StyledUL>
                <StyledLi>
                    Compared two companies within an assigned industry by researching and observing the strategies,
                    functions, and financial aspects of both companies
                </StyledLi>
                <StyledLi>
                    Collaborated with a team of 5 classmates to create several cohesive presentations based
                    on our analyses
                </StyledLi>
            </StyledUL>
            <Calculator/>
        </StyledMain>
    )
}