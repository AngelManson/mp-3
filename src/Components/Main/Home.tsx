import styled from "styled-components";
import image from "../../src/IMG_1488.jpeg";

const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
    @media screen and (max-width: 1000px){
        height: 100vh;
        width: 100%;
        font-size: calc(2px + 2vw);
    }
`;

const StyledSubHeading = styled.h2`
    margin: 2%;
    text-align: center;
`;

const StyledP = styled.p`
    margin: 2%;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
`;

const StyledImage = styled.img`
    max-width: 40%;
`;

export default function Home() {
    return (
        <StyledMain>
            <title>Home|Resume</title>
            <StyledSubHeading>Home</StyledSubHeading>
            <StyledImage src={image} alt="Angel Manson"/>
            <StyledP>
                My name is Angel Manson, I am a senior at Boston University
                studying Computer Science with a Business minor.
                With a lifelong passion for math, I have always known that
                I wanted to work in a math-heavy field. So after high school,
                I aimed for a career in Finance or Accounting, but a pivotal
                moment came when I enrolled in a Computer Science course at
                Boston University, urged by my mother. Instantly captivated
                by the subject, I found myself thriving in the challenging
                coursework, constantly feeling accomplished. This leap of
                faith reshaped my career aspirations, revealing my true
                passion for Computer Science. I am now driven to utilize
                my mathematical passion and newfound love for technology
                to make meaningful contributions within the field.
            </StyledP>
            <StyledP>
                Welcome to my website! Here, you’ll find my education and
                work experience, along with other details to help you get to know me better.
            </StyledP>
        </StyledMain>
    )
}