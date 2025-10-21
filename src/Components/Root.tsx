import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx"
import {Route, Routes} from "react-router";
import Home from "./Main/Home.tsx";
import Edu from "./Main/Edu.tsx";
import Skills from "./Main/Skills.tsx";
import Projects from "./Main/Projects.tsx";
import Leadership from "./Main/Leadership.tsx";
import Experiences from "./Main/Experiences.tsx";
import styled from "styled-components";

const StyledPageWrapper = styled.div`
    width:80vw;
    background-color: rgba(202, 240, 248, 0.53);
    margin: 0 auto;
    text-align: center;
    font-size: calc(2px + 1.2vw);
    font-family: Sansation, Newsreader, monospace;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`;

export default function Root() {
    return(
        <StyledPageWrapper>
            <Header/>
            <StyledContainer>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Edu/>}/>
                    <Route path={`/skills`} element={<Skills/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/experiences`} element={<Experiences/>}/>
                    <Route path={`/leadership`} element={<Leadership/>}/>
                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledPageWrapper>
    )
}