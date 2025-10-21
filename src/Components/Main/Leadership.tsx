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

export default function Leadership() {
    return (
        <StyledMain>
            <title>Leadership|Resume</title>
            <StyledHeading>Leadership & Personal Development</StyledHeading>
            <StyledSubHeading>Allocations Board</StyledSubHeading>
            <StyledP>Director of Finance <strong>|</strong> March 2024 - Present</StyledP>
            <StyledUL>
                <StyledLi>
                    Accepted into an organization that is in charge of allocating resources effectively throughout campus
                </StyledLi>
                <StyledLi>
                    Directed financial operations by allocating funds to organizations,
                    managing the member directory, and preparing semester and annual budgets.
                </StyledLi>
                <StyledLi>
                    Demonstrated leadership and decision-making abilities through participation in the
                    Allocation Board, contributing to resource allocation decisions within my campus
                </StyledLi>
            </StyledUL>
            <StyledSubHeading>Management Leadership for Tomorrow</StyledSubHeading>
            <StyledP>Career Preparation Fellow <strong>|</strong> Jan 2024 - Present</StyledP>
            <StyledUL>
                <StyledLi>
                    Accepted into a selective 18-month professional development program for
                    high-achieving diverse talent
                </StyledLi>
                <StyledLi>
                    Complete business case studies and assignments to grow leadership and technical skills
                </StyledLi>
                <StyledLi>
                    Attend conferences hosted by industry leaders, such as Deloitte, LinkedIn, and Target
                </StyledLi>
            </StyledUL>
        </StyledMain>
    )
}