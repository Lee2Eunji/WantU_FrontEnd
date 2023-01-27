import styled from "styled-components";
import List from "../components/List";
import Nav from "../components/Nav";

export default function S_list() {
    return(
        <div>
            <Nav/>
            <StyledH1>samsung</StyledH1>
            <List />
        </div>
    )
}

const StyledH1 = styled.h1`
text-align: center;
color: #808080;
`;