import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: rgba(0, 119, 182, 0.8);
    padding-left: 1%;
    text-align: left;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Angel Manson</h1>
            <p>Angel's Resume</p>
        </StyledHeader>
    )
}