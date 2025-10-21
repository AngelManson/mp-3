import styled from "styled-components";

const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
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

const StyledP = styled.p`
    margin: 2%;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
`;

export default function Experiences() {
    return (
        <StyledMain>
            <title>Experiences|Resume</title>
            <StyledHeading>Experience</StyledHeading>
            <StyledSubHeading>Software Engineering Intern, JPMorgan Chase</StyledSubHeading>
            <StyledP>Jersey City, NJ <strong>|</strong> June 2025 - Aug 2025</StyledP>
            <StyledUL>
                <StyledLi>
                    Designed and implemented RESTful APIs to support dynamic data
                    exchange between front-end and back-end systems
                </StyledLi>
                <StyledLi>
                    Developed and deployed a full-stack application using, Cassandra,
                    React and TS, improving efficiency
                </StyledLi>
            </StyledUL>
            <StyledSubHeading>Head Teaching Assistant, Questrom School of Business</StyledSubHeading>
            <StyledP>Boston, MA <strong>|</strong> Dec 2024 - Present</StyledP>
            <StyledUL>
                <StyledLi>
                    Coordinated teaching assistants with professors, scheduled shifts and
                    office hours, and ensured alignment on course goals, grading, and student support
                </StyledLi>
                <StyledLi>
                    Assisted in grading assignments as well as maintaining records of student progress and
                    attendance
                </StyledLi>
                <StyledLi>
                    Conducted regular office hours, addressing student questions and concerns, thereby
                    improving their comprehension of the material and performance in the course
                </StyledLi>
            </StyledUL>
            <StyledSubHeading>Teaching Assistant, Questrom School of Business</StyledSubHeading>
            <StyledP>Boston, MA <strong>|</strong> Sep 2023 - Dec 2024</StyledP>
            <StyledUL>
                <StyledLi>
                    Assisted in grading assignments as well as maintaining records of student progress and
                    attendance
                </StyledLi>
                <StyledLi>
                    Conducted regular office hours, addressing student questions and concerns, thereby
                    improving their comprehension of the material and performance in the course
                </StyledLi>
            </StyledUL>
        </StyledMain>
    )
}