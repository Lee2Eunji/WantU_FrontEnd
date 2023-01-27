import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Nav = () => {
    
    // const [move, setMove] = useState<string>('');

    // const selectStyle = StyledSpan1;

    // if(route === "/s_list") {
    //     selectStyle.style.color = "#808080";
    // }

    // const onClickChange = 

    return (
        <Container>
            <Link href="/" style={{ textDecoration: "none" }}>
                <StyledH1>WantU</StyledH1>
            </Link>
            <StyledNav>
                <Link href="/s_list" style={{ textDecoration: "none" }}>
                    <StyledSpan1>samsung</StyledSpan1>
                </Link>
                <Link href="/l_list" style={{ textDecoration: "none" }}>
                    <StyledSpan2>LG</StyledSpan2>
                </Link>
                <Link href="/a_list" style={{ textDecoration: "none" }}>
                    <StyledSpan3>Apple</StyledSpan3>
                </Link>
            </StyledNav>
        </Container>
    )
}

export default Nav;

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 1rem;
`;

const StyledH1 = styled.h1`
color: #007acc;
`;

const StyledNav = styled.nav`
float: right;
`;

const StyledSpan1 = styled.span`
margin-right: 1rem;
color: white;
cursor: pointer;

&:hover {
  color: #808080;
}
`;

const StyledSpan2 = styled.span`
margin-right: 1rem;
color: white;
cursor: pointer;

&:hover {
  color: #808080;
}
`;

const StyledSpan3 = styled.span`
margin-right: 1rem;
color: white;
cursor: pointer;

&:hover {
  color: #808080;
}
`;