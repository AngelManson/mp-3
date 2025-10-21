import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    background-color: rgba(0, 119, 182, 0.8);
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Angel Manson <Link to={`/`}>Credits</Link> &#169;</p>
        </StyledFooter>
    )
}