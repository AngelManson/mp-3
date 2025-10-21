import {useState} from "react";
import styled from "styled-components";
import useChangeColor from "../Hooks/useChangeColor.tsx";

const StyledCalculator = styled.div`
    background-image: url("https://img.freepik.com/premium-photo/pink-background-scribbler-calculator-pencil-school-supplies-with-place-inscripti_96727-2602.jpg");
    padding: 5%;
    margin: 5%;
    max-width: 60%;
`;

const StyledHeading = styled.h3`
    color: #a88080;
`;

const StyledInput = styled.input`
    max-width: 15%;
    height: 4vh;
    text-align: center;
    border-radius: 35%;
    margin: 0.5%;
    color: #a88080;
    @media screen and (max-width: 1000px){
        height: 2.5vh;
    }
`;

const StyledButton = styled.button`
    background-color: #bd9191;
    border-radius: 25%;
    margin: 1.5%;
    @media screen and (max-width: 1000px){
        font-size: calc(2px + 2vw);
        color: black;
    }
`;

export default function Calculator() {
    const [one, setOne] = useState<string>("");
    const [two, setTwo] = useState<string>("");
    const [output, setOutput] = useState<string>("Output");
    const color = useChangeColor(output);

    function doAdd(){
        const result = String((Number(one) + Number(two)));
        setOutput(result);
    }

    function doSubtract(){
        const result = String((Number(one) - Number(two)));
        setOutput(result);
    }

    function doMultiply(){
        const result = String((Number(one) * Number(two)));
        setOutput(result);
    }

    function doDivide(){
        if (Number(two) === 0){
            setOutput("Undefined");
        } else {
            const result = String((Number(one) / Number(two)));
            setOutput(result);
        }
    }

    function doPower(){
        let result = 1;
        for(let i = 0; i < Number(two); i++) {
            result *= Number(one);
        }
        setOutput(String(result));
    }

    function doClear(){
        setOutput("Output");
        setOne("");
        setTwo("");
    }

    return (
        <StyledCalculator>
            <StyledHeading>Calculator</StyledHeading>
            <label> </label> <StyledInput value={one} onChange={(e) => setOne(e.target.value)}/>
            <label> </label> <StyledInput value={two} onChange={(e) => setTwo(e.target.value)}/>
            <br/>
            <StyledButton onClick={doAdd}>+</StyledButton>
            <StyledButton onClick={doSubtract}>-</StyledButton>
            <StyledButton onClick={doMultiply}>*</StyledButton>
            <StyledButton onClick={doDivide}>/</StyledButton>
            <StyledButton onClick={doPower}>**</StyledButton>
            <StyledButton onClick={doClear}>Clear</StyledButton>
            <h2 style={{color}}>{output}</h2>
        </StyledCalculator>
    )
}